import { cva } from 'class-variance-authority'

export const badge = cva(
  [
    'px-2',
    'inline-flex',
    'text-xs',
    'leading-5',
    'font-semibold',
    'rounded-full',
    'capitalize',
    'w-fit',
    'select-none',
    'justify-center',
    'items-center',
    'bg-zinc-100',
    'text-zinc-800',
    'border-zinc-800',
  ],
  {
    variants: {
      status: {
        active: 'bg-primary-100 text-primary-600',
        success: 'bg-success-200 text-success-600',
        error: 'bg-error-200 text-error-600',
        warning: 'bg-warning-200 text-warning-600',
      },
      size: {
        sm: ['px-3', 'py-1'],
        md: ['h-5', 'px-5', 'py-3'],
        lg: ['py-1', 'px-5'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)
