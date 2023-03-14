import { flexRender } from '@tanstack/react-table'
import { cva } from 'class-variance-authority'
import { Icon } from '../../icon'
import { sortIconClasses } from '../classes'
import { useTable } from '../table.context'
import Filter from './filter'

interface HeaderCellProps {
  header: any
}

const headerCellClass = cva(
  [
    'select-none',
    'text-center',
    'text-sm',
    'font-medium',
    'text-gray-500',
    'dark:text-gray-200',
    'capitalize',
    'tracking-wider',
  ],
  {
    variants: {
      sortable: {
        true: ['cursor-pointer'],
        false: [],
      },
    },
  }
)

const innerHeaderCellClass = cva(
  [
    //
    'flex',
    'items-center',
    'max-w-fit',
  ],
  {
    variants: {
      center: {
        true: ['mx-auto'],
        false: [],
      },
    },
  }
)

export default function HeaderCell({ header }: HeaderCellProps) {
  const { table } = useTable()
  const width = header.column.getSize()
  const sortable = header.column.getCanSort()
  const isSorted = header.column.getIsSorted()
  const { className = '', ...meta } =
    (header.column.columnDef.meta as any) ?? {}

  return (
    <th
      colSpan={header.colSpan}
      scope='col'
      className={headerCellClass({ sortable })}
      onClick={header.column.getToggleSortingHandler()}
      style={{ width }}
      {...meta}
    >
      {header.isPlaceholder ? null : (
        <>
          <span
            className={innerHeaderCellClass({
              center: meta?.align === 'center',
            })}
          >
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
        </>
      )}
    </th>
  )
}
