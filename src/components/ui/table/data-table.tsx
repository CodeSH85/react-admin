'use client';

import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual'

import { DataTableProps, ColumnType } from './type';
import { useRef } from 'react';

const DataTable = (props: DataTableProps) => {
  const { data, columns: propColumns } = props;

  const columnHelper = createColumnHelper();
  const columns = propColumns.map((column) => {
    return columnHelper.accessor(column.key, {
      id: column.key,
      header: column.title.toString(),
      cell: (info) => info.renderValue(),
    });
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const { rows } = table.getRowModel();
  const tableContainerRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => 24,
    getScrollElement: () => tableContainerRef.current
  })

  return (
    <div
      ref={tableContainerRef}
      className='w-full overflow-auto relative h-[800px]'
    >
      <table
        className='grid'
      >
        <thead
          className='grid sticky top-0 z-[1]'
        >
          {table.getHeaderGroups().map((headerGroup) => (
            <tr 
              key={headerGroup.id}
              className='flex w-full'
            >
              {headerGroup.headers.map((header) => (
                <th 
                  key={header.id}
                  className='flex'
                  style={{
                    width: header.getSize()
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
            style={{
              display: 'grid',
              height: `${rowVirtualizer.getTotalSize()}px`,
              position: 'relative',
            }}
          >
            {rowVirtualizer.getVirtualItems().map(virtualRow => {
              const row = rows[virtualRow.index]
              return (
                <tr
                  data-index={virtualRow.index}
                  ref={node => rowVirtualizer.measureElement(node)}
                  key={row.id}
                  style={{
                    display: 'flex',
                    position: 'absolute',
                    transform: `translateY(${virtualRow.start}px)`,
                    width: '100%',
                  }}
                >
                  {row.getVisibleCells().map(cell => {
                    return (
                      <td
                        key={cell.id}
                        style={{
                          display: 'flex',
                          width: cell.column.getSize(),
                        }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};

export { DataTable };
