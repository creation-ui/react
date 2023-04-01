import { cva } from 'class-variance-authority'
import { microInteractions, classes, sharedReadOnlyCVA } from '../../classes'

export const switchClasses = cva(
  [
    ...classes.input,
    microInteractions,
    'text-primary-500',
    'checked:border-none',
    'dark:checked:bg-primary-500',
    'cursor-pointer',
    'peer',
    'relative',
    'inline-flex',
    'shrink-0',
    'border-2',
    '!bg-info-300',
    '!dark:bg-info-700',
    '!rounded-full',
  ],
  {
    variants: {
      size: {
        sm: ['h-4', 'w-8'],
        md: ['h-6', 'w-12'],
        lg: ['h-8', 'w-16'],
      },
      checked: {
        true: ['!bg-primary-500', '!border-primary-500'],
        false: ['!border-transparent'],
      },
      readOnly: sharedReadOnlyCVA,
    },
    defaultVariants: {
      size: 'md',
    },
  }
)
export const switchCircle = cva(
  [
    microInteractions,
    'inline-block',
    'transform',
    'transition-all',
    'rounded-full',
    'bg-white',
    'shadow-lg',
    'ring-0',
  ],
  {
    variants: {
      size: {
        sm: ['h-3', 'w-3'],
        md: ['h-5', 'w-5'],
        lg: ['h-7', 'w-7'],
      },
      checked: {
        true: ['translate-x-full'],
        false: ['translate-x-0'],
      },
    },
    compoundVariants: [
      {
        checked: true,
        size: 'sm',
        className: ['translate-x-4'],
      },
      {
        checked: true,
        size: 'md',
        className: ['translate-x-6'],
      },
      {
        checked: true,
        size: 'lg',
        className: ['translate-x-8'],
      },
    ],
  }
)
