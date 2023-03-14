import { flexRender } from '@tanstack/react-table'
import { twMerge } from 'tailwind-merge'

interface FooterCellProps {
  footer: any
}

const footerClass = 'p-2 text-xs font-medium text-gray-500 dark:text-gray-200'

export default function FooterCell({ footer }: FooterCellProps) {
  const width = footer.column.getSize()
  const { className = '', ...meta } =
    (footer.column.columnDef.meta as any) ?? {}
  return (
    <td
      colSpan={footer.colSpan}
      scope='col'
      className={twMerge(footerClass, className)}
      style={{ width }}
      {...meta}
    >
      {footer.isPlaceholder ? null : (
        <div className={'flex items-center'}>
          {flexRender(footer.column.columnDef.footer, footer.getContext())}
        </div>
      )}
    </td>
  )
}
