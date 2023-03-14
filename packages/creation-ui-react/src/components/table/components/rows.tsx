import { Cell as CellType, flexRender, Row } from '@tanstack/react-table'
import { twMerge } from 'tailwind-merge'

interface RowCellProps {
  row: Row<any>
}

const Rows = ({ row }: RowCellProps) => {
  const cells = row.getVisibleCells()
  return (
    <tr className='hover:bg-gray-100 dark:hover:bg-gray-800 inline-block w-full'>
      {cells.map(cell => (
        <Cell key={cell.id} cell={cell} />
      ))}
    </tr>
  )
}

export default Rows

interface CellProps {
  cell: CellType<any, unknown>
}

const Cell = ({ cell }: CellProps) => {
  const column = cell.column
  const width = column.getSize()

  const { className = '', ...meta } = (cell.column.columnDef.meta as any) ?? {}
  return (
    <td
      className={twMerge('py-2', className)}
      key={cell.id}
      width={width}
      {...meta}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  )
}
