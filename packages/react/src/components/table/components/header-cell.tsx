import { flexRender } from '@tanstack/react-table'
import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import { Icon } from '../../icon'
import { sortIconClasses } from '../classes'
import { useTable } from '../table.context'
import { cellClasses } from './classes'
import Filter from './filter'

interface HeaderCellProps {
  header: any
}

const headerCellClass = cva(
  [
    'select-none',
    'text-sm',
    'font-medium',
    'text-gray-500',
    'dark:text-gray-200',
    'capitalize',
    'tracking-wider',
    'flex',
    'flex-col',
  ],
  {
    variants: {
      sortable: {
        true: ['cursor-pointer'],
        false: [],
      },
      align: {
        left: 'items-start',
        center: 'items-center',
        right: 'items-end',
      },
    },
    defaultVariants: {
      align: 'left',
    },
  }
)

export default function HeaderCell({ header }: HeaderCellProps) {
  const { table } = useTable()
  const width = header.column.getSize()
  const sortable = header.column.getCanSort()
  const isSorted = header.column.getIsSorted()

  const { className, align, ...meta } =
    (header.column.columnDef.meta as any) ?? {}

  return (
    <th
      colSpan={header.colSpan}
      scope='col'
      onClick={header.column.getToggleSortingHandler()}
      className={cellClasses({ align, className, padding: false })}
      {...meta}
    >
      {header.isPlaceholder ? null : (
        <div
          style={{ width }}
          className={headerCellClass({
            sortable,
            align,
          })}
        >
          <span className={clsx('flex', 'items-center')}>
            {flexRender(header.column.columnDef.header, header.getContext())}
            {isSorted && (
              <Icon
                aria-hidden='true'
                icon='straight'
                className={sortIconClasses({
                  desc: isSorted === 'desc',
                })}
              />
            )}
          </span>

          {header.column.getCanFilter() ? (
            <Filter column={header.column} table={table} />
          ) : null}
        </div>
      )}
    </th>
  )
}
