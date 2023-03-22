import { cva } from 'class-variance-authority'
import { microInteractions, sharedDisabledCVA } from '../../classes'

export const toggleGroup = {
  container: [
    microInteractions,
    'w-fit',
    'relative',
    'flex',
    'select-none',
    '!h-fit',
    '!p-0',
  ],
  list: ['flex', 'flex-row', 'flex-nowrap'],
  option: cva(
    [
      microInteractions,
      'p-2',
      'cursor-pointer',
      'border-inherit',
      'border-r',
      'last:border-r-transparent',
      'flex',
      'flex-nowrap',
      'items-center',
      'justify-center',
      'uppercase',
      'shadow-none',
      'select-none',
    ],
    {
      variants: {
        checked: {
          true: ['!bg-primary-500', 'text-white', 'font-bold'],
          false: ['bg-info-50', 'text-info-900', 'hover:bg-info-100'],
        },
        disabled: sharedDisabledCVA,
        size: {
          sm: ['h-7'],
          md: ['h-9'],
          lg: [],
        },
      },
    }
  ),
}
