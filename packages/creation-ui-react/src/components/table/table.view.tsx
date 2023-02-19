import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import FooterCell from './components/footer-cell'
import HeaderCell from './components/header-cell'
import Pagination from './components/pagination'
import RowCell from './components/row-cell'
import { useTable } from './table.context'

const classes = {
  divide: 'divide-y divide-gray-200 dark:divide-gray-700',
  border: 'border border-gray-200 dark:border-gray-700',
  frame: 'bg-gray-50 dark:bg-gray-900',
  fullwidth: 'inline-block w-full',
}

const tableClasses = cva([
  classes.divide,
  classes.border,
  '!text-sm',
  'overflow-x-auto',
  'w-full',
  'min-h-full',
  'h-full',
  'relative',
])

const headerClasses = clsx(classes.frame, classes.fullwidth, 'sticky top-0')
const footerClasses = clsx(classes.frame, classes.fullwidth, 'sticky bottom-0')
const bodyClasses = cva([
  classes.divide,
  classes.fullwidth,
  'dark:bg-gray-800',
  'bg-white',
  'overflow-y-scroll',
  'min-h-full',
])

const Table = () => {
  const { table, height, pagination } = useTable()
  const data = table.getRowModel()
  const head = table.getHeaderGroups()
  const foot = table.getFooterGroups()

  return (
    <div className='overflow-hidden rounded-xl'>
      <table className={tableClasses()}>
        <thead className={headerClasses}>
          {head.map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(column => (
                <HeaderCell header={column} key={column.id} />
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={bodyClasses()} style={{ height }}>
          {data.rows.map(row => (
            <RowCell key={row.id} row={row} />
          ))}
        </tbody>
        <tfoot className={footerClasses}>
          {foot.map(group => (
            <tr key={group.id}>
              {group.headers.map(column => (
                <FooterCell footer={column} key={column.id} />
              ))}
            </tr>
          ))}
          {pagination && <Pagination />}
        </tfoot>
      </table>
    </div>
  )
}

export default Table
