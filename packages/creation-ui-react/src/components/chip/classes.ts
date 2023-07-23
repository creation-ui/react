import { cva } from 'class-variance-authority'

export const chipClasses = cva(
  [
    'rounded-full',
    'text-info-800',
    'bg-info-100',
    'dark:text-info-300',
    'dark:bg-info-700',
    'px-1.5',
    'text-sm',
    'inline-flex',
    'gap-1',
    'items-center',
    'select-none',
  ],
  {
    variants: {},
  }
)
