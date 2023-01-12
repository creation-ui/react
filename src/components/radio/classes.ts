import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import { shared } from '../../classes'

export const radio = cva(
  [twMerge([shared.input, shared.checkable, 'rounded-full'])],
  {
    variants: {
      size: {
        sm: ['h-4', 'w-4'],
        md: ['h-5', 'w-5'],
        lg: ['h-6', 'w-6'],
      },
    },
  }
)
