import { cva } from 'class-variance-authority'

export const badge = cva(
  [
    'px-2',
    'inline-flex',
    'text-xs',
    'leading-5',
    'rounded-full',
    'font-semibold',
    'uppercase',
    'w-fit',
    'select-none',
    'justify-center',
    'items-center',
  ],
  {
    variants: {
      status: {
        active: 'bg-primary-50/50 text-primary-500',
        success: 'bg-success-500/20 text-success-600',
        error: 'bg-error-100 text-error-500',
        warning: 'bg-warning-100 text-warning-600',
        info: 'bg-zinc-100 text-zinc-800',
      },
      border: {
        active: 'border border-primary-200',
        success: 'border border-success-400',
        error: 'border border-error-300',
        warning: 'border border-warning-300',
        info: 'border border-zinc-400',
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
