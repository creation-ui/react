import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import FooterCell from './components/footer-cell'
import HeaderCell from './components/header-cell'
import Pagination from './components/pagination'
import Rows from './components/rows'
import { useTable } from './table.context'
import { LoadingOverlay } from '../loading-overlay'
import { Callout } from '../callout'

const classes = {
  divide: 'divide-y divide-gray-200 dark:divide-gray-700',
  border: 'border border-gray-200 dark:border-gray-700',
  frame: '', //'bg-gray-50 dark:bg-gray-900',
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

const headerClasses = clsx(
  classes.frame,
  classes.fullwidth,
  'sticky top-0 flex items-center pt-6 pb-3'
)
const footerClasses = clsx(classes.frame, classes.fullwidth, 'sticky bottom-0')
const bodyClasses = cva([
  classes.divide,
  classes.fullwidth,
  'overflow-y-scroll',
  'min-h-full',
])

const Table = () => {
  const { table, height, pagination, loading, error } = useTable()
  const data = table.getRowModel()
  const head = table.getHeaderGroups()
  const foot = table.getFooterGroups()

  return (
    <div className='overflow-hidden rounded-lg shadow-md dark:shadow-none relative'>
      <LoadingOverlay active={loading} />
      <table className={tableClasses()} style={{ height }}>
        <thead className={headerClasses}>
          {head.map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(column => (
                <HeaderCell header={column} key={column.id} />
              ))}
            </tr>
          ))}
        </thead>
        {error ? (
          <div
            className={clsx(
              //

              classes.border,
              'h-full'
            )}
          >
            <Callout
              title={error.title}
              content={error.message}
              status={'error'}
              className={clsx('mx-auto', 'mt-20', 'w-2/3')}
            />
          </div>
        ) : (
          <tbody className={bodyClasses()}>
            {data.rows.map(row => (
              <Rows key={row.id} row={row} />
            ))}
          </tbody>
        )}

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
