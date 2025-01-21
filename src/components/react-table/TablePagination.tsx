// libraries
import { useEffect, useState } from 'react';

// custom modules
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from '@/components/ui/pagination';
import { cn } from '@/lib/utils';

interface TablePaginationProps {
  getPageCount: () => number;
  setPageIndex: (index: number) => void;
  setPageSize: (size: number) => void;
  getState: () => { pagination: { pageSize: number; pageIndex: number } };
  initialPageSize?: number;
}

const TablePagination = ({
  getPageCount,
  setPageIndex,
  setPageSize,
  getState,
  initialPageSize,
}: TablePaginationProps) => {
  const [visiblePages, setVisiblePages] = useState<number[]>([]);
  const totalPages = getPageCount();
  const currentPage = getState().pagination.pageIndex + 1;

  let options = [10, 25, 50, 100, 200, 500];

  if (initialPageSize) {
    options = [...options, initialPageSize]
      .filter(
        (item, index) => [...options, initialPageSize].indexOf(item) === index
      )
      .sort((a, b) => a - b);
  }

  // Set initial page size
  useEffect(() => {
    setPageSize(initialPageSize || 10);
  }, [initialPageSize, setPageSize]);

  // Update visible pages when currentPage changes
  useEffect(() => {
    const updateVisiblePages = () => {
      const pages = [];
      const maxVisiblePages = 3;

      if (totalPages <= maxVisiblePages) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        const end = Math.min(totalPages, start + maxVisiblePages - 1);

        if (end - start + 1 < maxVisiblePages) {
          start = Math.max(1, end - maxVisiblePages + 1);
        }

        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
      }

      setVisiblePages(pages);
    };

    updateVisiblePages();
  }, [currentPage, totalPages]);

  const handleChangePagination = (value: number) => {
    setPageIndex(value - 1);
  };

  const handleChangePageSize = (value: string) => {
    setPageSize(Number(value));
  };

  return (
    <div className="flex items-center justify-between gap-2 w-full flex-wrap gap-y-4 max-md:justify-center">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Label>Rows per page</Label>
          <Select
            value={getState().pagination.pageSize.toString()}
            onValueChange={handleChangePageSize}
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Rows per page" />
            </SelectTrigger>
            <SelectContent className="z-[1000]">
              {options.map((option) => (
                <SelectItem key={option} value={option.toString()}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Label>Go to</Label>
          <Input
            type="number"
            value={currentPage}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              setPageIndex(page);
            }}
            className="w-16"
          />
        </div>
      </div>
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2 grow">
          <Label>Page </Label>
          <span className="text-sm font-medium">
            {currentPage} of {totalPages} pages
          </span>
        </div>
      )}
      <Pagination className="w-fit">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() =>
                handleChangePagination(Math.max(1, currentPage - 1))
              }
              hidden={currentPage === 1}
            />
          </PaginationItem>
          {visiblePages.map((page) => (
            <PaginationItem key={page}>
              <button
                onClick={() => handleChangePagination(page)}
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                  currentPage === page
                    ? 'bg-primary text-primary-foreground'
                    : ''
                )}
              >
                {page}
              </button>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                handleChangePagination(Math.min(totalPages, currentPage + 1))
              }
              href="#"
              hidden={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default TablePagination;
