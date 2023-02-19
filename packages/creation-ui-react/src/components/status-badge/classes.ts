import { cva } from 'class-variance-authority'

export const badge = cva(
  [
    'px-2',
    'inline-flex',
    'text-xs',
    'leading-5',
    'font-semibold',
    'rounded-full',
    'uppercase',
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
        active: 'bg-white !text-primary-500',
        success: 'bg-success-100 text-success-500',
        error: 'bg-error-100 text-error-500',
        warning: 'bg-warning-100 text-warning-500',
      },
      border: {
        active: 'border border-primary-200',
        success: 'border border-success-400',
        error: 'border border-error-300',
        warning: 'border border-warning-300',
        default: 'border border-zinc-400',
      },
      size: {
        sm: ['text-xs'],
        md: ['text-sm'],
        lg: ['text-base'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)
