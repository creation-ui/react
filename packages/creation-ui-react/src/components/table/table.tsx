import clsx from 'clsx'
import HeaderCell from './header-cell'
import RowCell from './row-cell'
import { TableProps } from './table.types'
import './table.module.scss'

const Table = ({ table, className }: TableProps) => {
  return (
    <div className={clsx('table--level-1', className)}>
      <div className='table--level-2'>
        <div className='table--level-3'>
          <div className='table--level-4'>
            <table>
              <thead>
                {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <HeaderCell
                        header={header}
                        table={table}
                        key={header.id}
                      />
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map(row => (
                  <RowCell key={row.id} row={row} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
