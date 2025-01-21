// libraries
import { useState } from 'react';
import {
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  useReactTable,
  PaginationState,
  getPaginationRowModel,
  ColumnDef,
} from '@tanstack/react-table';

// custom modules
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CardContent } from '@/components/ui/card';
import HeaderSort from '@/components/react-table/HeaderSort';
import TablePagination from '@/components/react-table/TablePagination';

interface ReactTableProps {
  data: unknown[];
  columns: ColumnDef<unknown>[];
}

const ReactTable = ({ columns, data }: ReactTableProps) => {
  const [sorting, setSorting] = useState([
    {
      id: 'name',
      desc: false,
    },
  ]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    debugTable: true,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    state: {
      sorting,
      pagination,
    },
  });

  return (
    <CardContent>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className={
                    header.column.getCanSort()
                      ? 'cursor-pointer select-none'
                      : ''
                  }
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex items-center space-x-2">
                    <span>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </span>
                    {header.column.getCanSort() && (
                      <HeaderSort column={header.column} />
                    )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {
        <>
          <hr className="w-full bg-zinc-500" />
          <div className="p-4">
            <TablePagination
              {...{
                setPageSize: table.setPageSize,
                setPageIndex: table.setPageIndex,
                getState: table.getState,
                getPageCount: table.getPageCount,
              }}
            />
          </div>
        </>
      }
    </CardContent>
  );
};

export { ReactTable };
