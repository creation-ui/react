import { Cell as CellType, flexRender } from '@tanstack/react-table'
import { cellClasses } from './classes'

export interface CellProps {
  cell: CellType<any, unknown>
}

export const Cell = ({ cell }: CellProps) => {
  const column = cell.column
  const width = column.getSize()

  const { className, align, ...meta } =
    (cell.column.columnDef.meta as any) ?? {}
  return (
    <td
      className={cellClasses({ className, align })}
      key={cell.id}
      style={{ width }}
      {...meta}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  )
}
