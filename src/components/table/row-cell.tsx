import { flexRender, Row } from '@tanstack/react-table'

interface RowCellProps {
  row: Row<any>
}

const RowCell = ({ row }: RowCellProps) => {
  return (
    <tr>
      {row.getVisibleCells().map(cell => (
        <td className='table--cell' key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
    </tr>
  )
}

export default RowCell
