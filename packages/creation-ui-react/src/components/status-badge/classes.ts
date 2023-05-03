import { cva } from 'class-variance-authority'
import clsx from 'clsx'

const bg = {
  primary: 'bg-primary-50/50 dark:bg-primary-100',
  success: 'bg-success-50/50 dark:bg-success-100',
  error: 'bg-error-100',
  warning: 'bg-warning-100',
  info: 'bg-info-100',
}

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
        primary: 'text-primary-500',
        success: 'text-success-600',
        error: 'text-error-500',
        warning: 'text-warning-600',
        info: 'text-info-800',
      },
      size: {
        sm: ['!text-xs'],
        md: ['!text-sm'],
        lg: ['!text-base'],
      },
      variant: {
        contained: [],
        outlined: [],
        text: [],
      },
    },
    defaultVariants: {
      size: 'md',
    },
    compoundVariants: [
      // OUTLINED
      {
        status: 'primary',
        variant: 'outlined',
        className: clsx('border border-primary-200', bg.primary),
      },
      {
        status: 'success',
        variant: 'outlined',
        className: clsx('border border-success-200', bg.success),
      },
      {
        status: 'warning',
        variant: 'outlined',
        className: clsx('border border-warning-200', bg.warning),
      },
      {
        status: 'error',
        variant: 'outlined',
        className: clsx('border border-error-200', bg.error),
      },
      {
        status: 'info',
        variant: 'outlined',
        className: clsx('border border-info-200', bg.info),
      },
      // CONTAINED
      {
        status: 'primary',
        variant: 'contained',
        className: bg.primary,
      },
      {
        status: 'success',
        variant: 'contained',
        className: bg.success,
      },
      {
        status: 'warning',
        variant: 'contained',
        className: bg.warning,
      },
      {
        status: 'error',
        variant: 'contained',
        className: bg.error,
      },
      {
        status: 'info',
        variant: 'contained',
        className: bg.info,
      },
    ],
  }
)
