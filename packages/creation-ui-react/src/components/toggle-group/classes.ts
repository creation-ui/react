import { cva } from 'class-variance-authority'
import { microInteractions, sharedDisabledCVA } from '../../classes'

export const toggleGroup = {
  container: [
    microInteractions,
    'bg-zinc-50',
    'w-fit',
    'rounded',
    'relative',
    'border',
    'border-zinc-200',
    'flex',
    'select-none',
  ],
  list: ['flex', 'flex-row', 'flex-nowrap'],
  option: cva(
    [
      microInteractions,
      'p-2',
      'cursor-pointer',
      'focus:outline-none',
      'text-zinc-900',
      'hover:bg-zinc-100',
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
        checked: { true: ['!bg-zinc-300'] },
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
