import { Cell as CellType, flexRender, Row } from '@tanstack/react-table'
import { getCellWidth } from '../../../utils/get-cell-width'

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
  const width = cell.column.getSize()

  return (
    <td {...getCellWidth(width, 'py-2 px-4 whitespace-nowrap')}>
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  )
}
