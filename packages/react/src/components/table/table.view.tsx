import clsx from 'clsx'
import { Callout } from '../callout'
import { LoadingOverlay } from '../loading-overlay'
import {
  bodyClasses,
  footerClasses,
  headerClasses,
  headerRowClasses,
  sharedTableClasses,
  tableClasses,
} from './classes'
import FooterCell from './components/footer-cell'
import HeaderCell from './components/header-cell'
import Pagination from './components/pagination'
import Row from './components/row'
import { useTable } from './table.context'

const Table = () => {
  const { table, height, pagination, loading, error, errorVariant } = useTable()
  const data = table.getRowModel()
  const head = table.getHeaderGroups()
  const foot = table.getFooterGroups()

  return (
    <div className='overflow-hidden rounded-lg relative'>
      <LoadingOverlay active={loading} />
      <table className={tableClasses()} style={{ height, maxHeight: height }}>
        <thead className={headerClasses}>
          {head.map(headerGroup => (
            <tr key={headerGroup.id} className={headerRowClasses}>
              {headerGroup.headers.map(column => (
                <HeaderCell header={column} key={column.id} />
              ))}
            </tr>
          ))}
        </thead>
        {error ? (
          <div
            className={clsx(sharedTableClasses.border, 'relative', 'w-full')}
            style={{ height, maxHeight: height }}
          >
            <div
              className={clsx(
                'absolute',
                'left-1/2',
                'transform',
                '-translate-x-1/2',
                'top-1/2',
                '-translate-y-1/2',
                'w-2/3'
              )}
            >
              <Callout
                title={error.title}
                content={error.message}
                variant={errorVariant}
                status={'error'}
              />
            </div>
          </div>
        ) : (
          <tbody
            className={bodyClasses()}
            style={{ height, maxHeight: height }}
          >
            {data.rows.map(row => (
              <Row key={row.id} row={row} />
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
