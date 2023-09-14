import { Row as RowProps } from '@tanstack/react-table'
import clsx from 'clsx'
import { rowGridClasses } from '../classes'
import { Cell } from './cell'

interface RowCellProps {
  row: RowProps<any>
}

const Row = ({ row }: RowCellProps) => {
  const cells = row.getVisibleCells()

  return (
    <tr
      className={clsx(
        'hover:bg-gray-100 dark:hover:bg-gray-800 w-full',
        rowGridClasses
      )}
    >
      {cells.map(cell => (
        <Cell key={cell.id} cell={cell} />
      ))}
    </tr>
  )
}

export default Row
