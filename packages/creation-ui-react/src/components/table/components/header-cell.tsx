import { flexRender, Table } from '@tanstack/react-table'
import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import { useTable } from '../table.context'
import { Icon } from '../../icon'
import { sortIconClasses } from '../classes'
import Filter from './filter'

interface HeaderCellProps {
  header: any
}

const innerColumnClass = cva(
  [
    //
    // 'flex',
    // 'items-center',
  ],
  {
    variants: {
      sortable: {
        true: [
          //
          'cursor-pointer',
          'select-none',
        ],
        false: [],
      },
    },
  }
)

const className =
  'px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-200 capitalize tracking-wider'

export default function HeaderCell({ header }: HeaderCellProps) {
  const { table } = useTable()
  const width = header.column.getSize()
  const sortable = header.column.getCanSort()
  const isSorted = header.column.getIsSorted()

  return (
    <th
      colSpan={header.colSpan}
      scope='col'
      {...(width
        ? { width, className }
        : { className: clsx(className, 'w-fit') })}
    >
      {header.isPlaceholder ? null : (
        <>
          <div
            className={innerColumnClass({ sortable })}
            onClick={header.column.getToggleSortingHandler()}
          >
            {flexRender(header.column.columnDef.header, header.getContext())}
            {isSorted && (
              <Icon
                icon='straight'
                className={sortIconClasses({
                  desc: isSorted === 'desc',
                })}
                aria-hidden='true'
              />
            )}
          </div>
          {header.column.getCanFilter() ? (
            <Filter column={header.column} table={table} />
          ) : null}
        </>
      )}
    </th>
  )
}
