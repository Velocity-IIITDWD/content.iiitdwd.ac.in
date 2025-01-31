/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { Download, Edit3Icon, Trash2, ArchiveRestore } from 'lucide-react';

import { deleteFile } from '@/app/actions/ftp/deleteFile';
import { downloadFile } from '@/app/actions/ftp/downloadFile';
import { GetFiles } from '@/app/actions/ftp/getFiles';
import { renameFile } from '@/app/actions/ftp/renameFile';
import { UploadFile } from '@/app/actions/ftp/uploadFile';
import { getRecentlyDeletedFiles } from '@/app/actions/ftp/getRecentlyDeleted';
import { ReactTable } from '@/components/ReactTable';
import { Card, Spinner, useToast } from '@sanity/ui';
import { Button } from '@/components/ui/button';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { restoreFile } from '@/app/actions/ftp/restoreFile';

export default function FTPComponent() {
  const [data, setData] = useState<unknown[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRenaming, setIsRenaming] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [allFiles, setAllFiles] = useState<unknown[]>([]);
  const [updatedFilename, setUpdatedFilename] = useState('');
  const [loc, setLoc] = useState<'images' | 'docs'>('images');
  const [editingFilename, setEditingFilename] = useState<string | null>(null);
  const [isViewingDeleted, setIsViewingDeleted] = useState(false);

  const toast = useToast();

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await GetFiles(loc);
      const filteredResult = result.filter(
        (file: any) => !file.name.includes('trash')
      );
      setData(filteredResult);
      setAllFiles(result);
    } catch (err) {
      console.log(`FTP Error: ${err}`);
      toast.push({
        status: 'error',
        title: "Can't connect to FTP server",
        description: 'Check logs',
      });
    } finally {
      setIsLoading(false);
    }
  }, [loc, toast]);

  const searchFile = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setData(allFiles);
      return;
    }

    const filteredFiles = allFiles.filter((file: any) =>
      file.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setData(filteredFiles);
  };

  // Fetch files on component mount
  useEffect(() => {
    fetchData();
  }, [toast, loc, fetchData]);

  const handleUpload = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsUploading(true);

      const formData = new FormData(event.currentTarget);
      const file = formData.get('file') as File;

      if (!file?.name) {
        toast.push({
          status: 'info',
          title: 'Error Uploading to FTP server',
          description: 'Please attach a file',
        });
        setIsUploading(false);
        return;
      }
      const fileExists = allFiles.some(
        (existingFile: any) =>
          existingFile.name.toLowerCase() === file.name.toLowerCase()
      );

      if (fileExists) {
        toast.push({
          status: 'error',
          title: 'File already exists',
          description:
            'A file with this name already exists. Please rename the file and try again.',
        });
        setIsUploading(false);
        return;
      }

      try {
        await UploadFile({ formData, loc });
        toast.push({
          status: 'success',
          title: 'File uploaded successfully.',
        });
        await fetchData();
      } catch (err: unknown) {
        toast.push({
          status: 'error',
          title: 'Error Uploading to FTP server',
          description: err as string,
        });
      } finally {
        setIsUploading(false);
      }
    },
    [loc, toast, fetchData]
  );

  const handleDownload = useCallback(
    async (filename: string) => {
      try {
        const stream = await downloadFile({ filename, loc });

        const response = new Response(stream);
        const blob = await response.blob();

        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();

        // Clean up
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        toast.push({
          status: 'success',
          title: `File ${filename} downloaded successfully.`,
        });
      } catch (e) {
        const errorMsg = (e as { message: string })?.message || '';
        toast.push({
          status: 'error',
          title: 'Failed to download file',
          description: errorMsg,
        });
      }
    },
    [toast, loc]
  );

  const handleDelete = useCallback(
    async (filename: string) => {
      setIsLoading(true);
      try {
        await deleteFile({ filename, loc });
        toast.push({
          status: 'success',
          title: `File ${filename} deleted successfully.`,
        });
        await fetchData();
      } catch (e) {
        const errorMsg = (e as { message: string })?.message || '';
        toast.push({
          status: 'error',
          title: 'Failed to delete file',
          description: errorMsg,
        });
      } finally {
        setIsLoading(false);
      }
    },
    [loc, toast, fetchData]
  );

  const handleRestore = useCallback(
    async (filename: string) => {
      setIsLoading(true);
      try {
        await restoreFile({ filename, loc });
        toast.push({
          status: 'success',
          title: `File ${filename} restored successfully.`,
        });
        await handleRecentlyDeleted();
      } catch (e) {
        const errorMsg = (e as { message: string })?.message || '';
        toast.push({
          status: 'error',
          title: 'Failed to restore file',
          description: errorMsg,
        });
      } finally {
        setIsLoading(false);
      }
    },
    [loc, toast, fetchData]
  );

  const handleRename = useCallback(
    async (oldFilename: string) => {
      if (updatedFilename === oldFilename) {
        setEditingFilename(null); // Reset editing state
        setUpdatedFilename(''); // Clear the input field
        return;
      }
      if (!updatedFilename) {
        toast.push({
          status: 'error',
          title: 'Error',
          description: 'Please enter a new filename.',
        });
        return;
      }

      try {
        setIsRenaming(true);
        await renameFile({ oldFilename, newFilename: updatedFilename, loc });
        toast.push({
          status: 'success',
          title: `File ${oldFilename} renamed to ${updatedFilename} successfully.`,
        });
        await fetchData();
        setEditingFilename(null); // Reset editing state
        setUpdatedFilename(''); // Clear the input field
      } catch (e) {
        const errorMsg = (e as { message: string })?.message || '';
        toast.push({
          status: 'error',
          title: 'Failed to rename file',
          description: errorMsg,
        });
      } finally {
        setIsRenaming(false);
      }
    },
    [loc, toast, updatedFilename, fetchData]
  );

  const handleRecentlyDeleted = useCallback(async () => {
    try {
      setIsLoading(true);
      if (!isViewingDeleted) {
        const deletedFiles = await getRecentlyDeletedFiles(loc);
        setData(deletedFiles);
        setIsViewingDeleted(true);
        toast.push({
          status: 'success',
          title: 'Showing recently deleted files',
        });
      } else {
        await fetchData(); // Return to normal view
        setIsViewingDeleted(false);
      }
    } catch (err) {
      toast.push({
        status: 'error',
        title: 'Failed to fetch deleted files',
        description: (err as Error).message,
      });
    } finally {
      setIsLoading(false);
    }
  }, [loc, toast, isViewingDeleted, fetchData, handleRestore]);

  const columns = useMemo(
    () => [
      {
        header: 'Name',
        accessorKey: 'name',

        cell: ({ row }: any) => (
          <div className="flex items-center gap-2">
            {editingFilename === row.original.name ? (
              <Input
                key={row.original.name}
                value={updatedFilename}
                onChange={(e) => setUpdatedFilename(e.target.value)}
                className="w-auto"
                autoFocus
              />
            ) : (
              row.original.name
            )}
          </div>
        ),
      },
      {
        header: 'Size',
        accessorKey: 'size',
      },
      {
        header: 'Modified At',
        accessorKey: 'modifiedAt',
        meta: {
          className: 'text-right',
        },
      },
      {
        header: 'Actions',
        accessorKey: 'actions',
        enableSorting: false,

        cell: ({ row }: any) => (
          <div className="flex gap-2">
            <button
              onClick={() => handleDownload(row.original.name)}
              className="text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              <Download className="size-5" />
            </button>
            <button
              onClick={() => {
                setEditingFilename(row.original.name); // Enable editing mode
                setUpdatedFilename(row.original.name); // Pre-fill the input with the current filename
              }}
              className="text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              <Edit3Icon className="size-5" />
            </button>
            {isViewingDeleted ? (
              <button
                onClick={() => handleRestore(row.original.name)}
                className="text-zinc-400 hover:text-zinc-600 transition-colors"
              >
                <ArchiveRestore className="size-5" />
              </button>
            ) : (
              <button
                onClick={() => handleDelete(row.original.name)}
                className="text-zinc-400 hover:text-zinc-600 transition-colors"
              >
                <Trash2 className="size-5" />
              </button>
            )}
            {editingFilename == row.original.name && (
              <Button
                onClick={() => handleRename(row.original.name)}
                size="sm"
                variant="outline"
                className="w-14 text-center"
              >
                {isRenaming ? (
                  <div className="pb-2">
                    <Spinner muted />
                  </div>
                ) : (
                  'Save'
                )}
              </Button>
            )}
          </div>
        ),
      },
    ],
    [
      isRenaming,
      handleDownload,
      handleDelete,
      handleRename,
      handleRestore,
      editingFilename,
      updatedFilename,
      isViewingDeleted,
    ]
  );

  return (
    <Card className="!rounded-lg">
      <CardHeader>
        <CardTitle className="flex justify-between gap-2 flex-wrap">
          <span>Files</span>
          <Select
            disabled={isLoading || isUploading}
            value={loc}
            onValueChange={(value: string) =>
              setLoc(value as 'images' | 'docs')
            }
          >
            <Input
              type="text"
              placeholder="Search files..."
              onChange={(e) => searchFile(e.target.value)}
              className="w-full md:w-1/3 px-2 py-1 border rounded-md"
            />
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent className="z-[1000]">
              <SelectItem value="images">Images</SelectItem>
              <SelectItem value="docs">Documents</SelectItem>
            </SelectContent>
          </Select>
        </CardTitle>
        <form onSubmit={handleUpload} className="max-w-full flex gap-4 py-2">
          <Input name="file" type="file" />
          <Input name="loc" className="hidden" value={loc} readOnly />
          <Button
            type="submit"
            disabled={isUploading || isLoading}
            className="flex items-center gap-2 min-w-20"
          >
            {isUploading ? (
              <Spinner muted className="!size-5" />
            ) : (
              <span>Upload</span>
            )}
          </Button>
          <Button
            onClick={handleRecentlyDeleted}
            disabled={isUploading || isLoading}
            className="flex items-center gap-2 min-w-20"
          >
            {isUploading ? (
              <Spinner muted className="!size-5" />
            ) : (
              <span>
                {isViewingDeleted ? 'Show All Files' : 'Recently Deleted'}
              </span>
            )}
          </Button>
        </form>
      </CardHeader>
      {isLoading ? (
        <CardContent className="flex items-center justify-center gap-2 pb-6 w-full">
          <Spinner muted />
        </CardContent>
      ) : (
        <ReactTable data={data} columns={columns} />
      )}
    </Card>
  );
}
