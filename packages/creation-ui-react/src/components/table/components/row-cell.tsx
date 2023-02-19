import { flexRender, Row } from '@tanstack/react-table'

interface RowCellProps {
  row: Row<any>
}

const RowCell = ({ row }: RowCellProps) => {
  const cells = row.getVisibleCells()
  return (
    <tr>
      {cells.map(cell => (
        <td className='py-2 px-4 whitespace-nowrap' key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
    </tr>
  )
}

export default RowCell
