import { flexRender } from '@tanstack/react-table'
import { cva } from 'class-variance-authority'
import { getCellWidth } from '../../../utils/get-cell-width'
import { Icon } from '../../icon'
import { sortIconClasses } from '../classes'
import { useTable } from '../table.context'
import Filter from './filter'

interface HeaderCellProps {
  header: any
}

const innerColumnClass = cva(['flex', 'items-center', 'select-none'], {
  variants: {
    sortable: {
      true: ['cursor-pointer'],
      false: [],
    },
  },
})

const className =
  'px-4 py-2 text-left text-sm font-medium text-gray-500 dark:text-gray-200 capitalize tracking-wider'

export default function HeaderCell({ header }: HeaderCellProps) {
  const { table } = useTable()
  const width = header.column.getSize()
  const sortable = header.column.getCanSort()
  const isSorted = header.column.getIsSorted()

  return (
    <th
      colSpan={header.colSpan}
      scope='col'
      {...getCellWidth(width, className)}
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
