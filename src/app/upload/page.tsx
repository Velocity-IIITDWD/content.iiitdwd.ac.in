'use client';

import { useState, useEffect } from 'react';

interface FTPFile {
    name: string;
    size: number;
    date: Date;
    type: number;
}

export default function Home() {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [files, setFiles] = useState<FTPFile[]>([]);
    const [loading, setLoading] = useState(true);
    const [renamingFile, setRenamingFile] = useState<string | null>(null);
    const [newFileName, setNewFileName] = useState('');

    const fetchFiles = async () => {
        try {
            const response = await fetch('/api/files');
            if (!response.ok) throw new Error('Failed to fetch files');
            const data = await response.json();
            setFiles(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch files');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!file) return;

        setUploading(true);
        setError(null);
        setSuccess(false);

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Upload failed');
            }

            setSuccess(true);
            setFile(null);
            fetchFiles();
            const form = e.target as HTMLFormElement;
            form.reset();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Upload failed');
        } finally {
            setUploading(false);
        }
    };

    const handleDownload = async (filename: string) => {
        window.open(`/api/files/download/${filename}`, '_blank');
    };

    const handleRename = async (oldName: string) => {
        try {
            if (!newFileName.trim()) {
                throw new Error('New filename cannot be empty');
            }

            const response = await fetch('/api/files/rename', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    oldName,
                    newName: newFileName,
                }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Rename failed');
            }

            setRenamingFile(null);
            setNewFileName('');
            fetchFiles();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Rename failed');
        }
    };
    
    const handleDelete = async (filename: string) => {
        if (!window.confirm(`Are you sure you want to delete ${filename}?`)) {
            return;
        }
        
        try {
            const response = await fetch('/api/files/delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ filename }),
            });
    
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Delete failed');
            }
    
            fetchFiles();
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Delete failed');
        }
    };

    return (
      <main className="min-h-screen p-8 bg-gray-900 text-gray-100">
          <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl font-bold mb-4">File Management</h1>
  
              <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Upload File</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 bg-gray-800">
                          <input
                              type="file"
                              onChange={(e) => setFile(e.target.files?.[0] || null)}
                              className="w-full bg-gray-700 text-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                              disabled={uploading}
                          />
                      </div>
  
                      <button
                          type="submit"
                          disabled={!file || uploading}
                          className={`w-full py-2 px-4 rounded text-white transition-colors ${
                              !file || uploading
                                  ? 'bg-gray-600 cursor-not-allowed'
                                  : 'bg-blue-500 hover:bg-blue-600'
                          }`}
                      >
                          {uploading ? 'Uploading...' : 'Upload File'}
                      </button>
                  </form>
  
                  {error && (
                      <div className="mt-4 p-4 bg-red-800 text-red-300 rounded">
                          {error}
                      </div>
                  )}
  
                  {success && (
                      <div className="mt-4 p-4 bg-green-800 text-green-300 rounded">
                          File uploaded successfully!
                      </div>
                  )}
              </section>
  
              <section>
                  <h2 className="text-xl font-semibold mb-4">Files</h2>
                  {loading ? (
                      <div className="text-center py-4">Loading...</div>
                  ) : (
                      <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
                          <table className="min-w-full divide-y divide-gray-700">
                              <thead className="bg-gray-700">
                                  <tr>
                                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                          Name
                                      </th>
                                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                          Size
                                      </th>
                                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                          Date Modified
                                      </th>
                                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                                          Actions
                                      </th>
                                  </tr>
                              </thead>
                              <tbody className="bg-gray-800 divide-y divide-gray-700">
                                  {files.map((file) => (
                                      <tr key={file.name}>
                                          <td className="px-6 py-4 whitespace-nowrap text-gray-200">
                                              {renamingFile === file.name ? (
                                                  <input
                                                      type="text"
                                                      value={newFileName}
                                                      onChange={(e) => setNewFileName(e.target.value)}
                                                      className="bg-gray-700 border border-gray-600 rounded px-2 py-1 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                      autoFocus
                                                  />
                                              ) : (
                                                  file.name
                                              )}
                                          </td>
                                          <td className="px-6 py-4 whitespace-nowrap text-gray-200">
                                              {(file.size / 1024).toFixed(2)} KB
                                          </td>
                                          <td className="px-6 py-4 whitespace-nowrap text-gray-200">
                                              {new Date(file.date).toLocaleString()}
                                          </td>
                                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                                {renamingFile === file.name ? (
                                                    <>
                                                        <button
                                                            onClick={() => handleRename(file.name)}
                                                            className="text-green-600 hover:text-green-900"
                                                        >
                                                            Save
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                setRenamingFile(null);
                                                                setNewFileName('');
                                                            }}
                                                            className="text-red-600 hover:text-red-900"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button
                                                            onClick={() => handleDownload(file.name)}
                                                            className="text-blue-600 hover:text-blue-900"
                                                        >
                                                            Download
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                setRenamingFile(file.name);
                                                                setNewFileName(file.name);
                                                            }}
                                                            className="text-gray-600 hover:text-gray-900"
                                                        >
                                                            Rename
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(file.name)}
                                                            className="text-red-600 hover:text-red-900"
                                                        >
                                                            Delete
                                                        </button>
                                                    </>
                                                )}
                                            </td>
                                      </tr>
                                  ))}
                              </tbody>
                          </table>
                      </div>
                  )}
              </section>
          </div>
      </main>
  );
}
 
