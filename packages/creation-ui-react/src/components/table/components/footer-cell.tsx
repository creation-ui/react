import { flexRender } from '@tanstack/react-table'
import { getCellWidth } from '../../../utils/get-cell-width'

interface FooterCellProps {
  footer: any
}

const className =
  'px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-200'

export default function FooterCell({ footer }: FooterCellProps) {
  const width = footer.column.getSize()

  return (
    <td
      colSpan={footer.colSpan}
      scope='col'
      {...getCellWidth(width, className)}
    >
      {footer.isPlaceholder ? null : (
        <div className={'flex items-center'}>
          {flexRender(footer.column.columnDef.footer, footer.getContext())}
        </div>
      )}
    </td>
  )
}
