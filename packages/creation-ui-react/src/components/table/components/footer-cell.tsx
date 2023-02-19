import { flexRender } from '@tanstack/react-table'
import { useTable } from '../table.context'

interface FooterCellProps {
  footer: any
}

export default function FooterCell({ footer }: FooterCellProps) {
  const { table } = useTable()
  return (
    <td
      colSpan={footer.colSpan}
      scope='col'
      className='px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-200 capitalize tracking-wider'
    >
      {footer.isPlaceholder ? null : (
        <>
          <div className={'flex items-center'}>
            {flexRender(footer.column.columnDef.footer, footer.getContext())}
          </div>
        </>
      )}
    </td>
  )
}
