import { cva } from 'class-variance-authority'
import { sharedDisabledCVA } from '../../classes'

export const button = cva(
  [
    'gap-2',
    'inline-flex',
    'flex-nowrap',
    'rounded-md',
    'items-center',
    'cursor-pointer',
    'select-none',
  ],
  {
    variants: {
      disabled: sharedDisabledCVA,
      size: {
        //
        sm: ['px-3', 'py-1'],
        md: ['px-4', 'py-1'],
        lg: ['px-6', 'py-2'],
      },
      variant: {
        contained: null,
        outlined: null,
        text: null,
      },
      color: {
        primary: null,
        success: null,
        warning: null,
        error: null,
      },
      circle: { true: ['rounded-full'], false: null },
    },
    defaultVariants: {
      variant: 'contained',
      size: 'md',
      circle: false,
    },
    compoundVariants: [
      {
        variant: 'contained',
        color: 'primary',
        className: [
          'text-white',
          'bg-primary-500',
          'hover:bg-primary-600',
          'focus:bg-primary-600',
          'active:bg-primary-700',
        ],
      },
      {
        variant: 'outlined',
        color: 'primary',
        className: [
          'border',
          'border-primary-500',
          'text-primary-500',
          'hover:bg-primary-50',
          'active:bg-primary-100',
        ],
      },
      {
        variant: 'text',
        color: 'primary',
        className: [
          'bg-transparent',
          'text-primary-500',
          'focus:text-primary-600',
          'hover:text-primary-600',
          'hover:bg-primary-50/10',
          'active:text-primary-500',
        ],
      },
      {
        variant: 'contained',
        color: 'success',
        className: [
          'text-white',
          'bg-success-500',
          'hover:bg-success-600',
          'focus:bg-success-600',
          'active:bg-success-700',
        ],
      },
      {
        variant: 'outlined',
        color: 'success',
        className: [
          'border',
          'border-success-500',
          'text-success-500',
          'hover:bg-success-50',
          'active:bg-success-100',
        ],
      },
      {
        variant: 'text',
        color: 'success',
        className: [
          'bg-transparent',
          'text-success-500',
          'focus:text-success-600',
          'hover:text-success-600',
          'hover:bg-success-50/10',
          'active:text-success-500',
        ],
      },
      {
        variant: 'contained',
        color: 'warning',
        className: [
          'text-white',
          'bg-warning-500',
          'hover:bg-warning-600',
          'focus:bg-warning-600',
          'active:bg-warning-700',
        ],
      },
      {
        variant: 'outlined',
        color: 'warning',
        className: [
          'border',
          'border-warning-500',
          'text-warning-500',
          'hover:bg-warning-50',
          'active:bg-warning-100',
        ],
      },
      {
        variant: 'text',
        color: 'warning',
        className: [
          'bg-transparent',
          'text-warning-500',
          'focus:text-warning-600',
          'hover:text-warning-600',
          'hover:bg-warning-50/10',
          'active:text-warning-500',
        ],
      },
      {
        variant: 'contained',
        color: 'error',
        className: [
          'text-white',
          'bg-error-500',
          'hover:bg-error-600',
          'focus:bg-error-600',
          'active:bg-error-700',
        ],
      },
      {
        variant: 'outlined',
        color: 'error',
        className: [
          'border',
          'border-error-500',
          'text-error-500',
          'hover:bg-error-50',
          'active:bg-error-100',
        ],
      },
      {
        variant: 'text',
        color: 'error',
        className: [
          'bg-transparent',
          'text-error-500',
          'focus:text-error-600',
          'hover:text-error-600',
          'hover:bg-error-50/10',
          'active:text-error-500',
        ],
      },
      {
        size: 'sm',
        circle: true,
        className: ['px-3'],
      },
      {
        size: 'md',
        circle: true,
        className: ['px-4'],
      },
      {
        size: 'lg',
        circle: true,
        className: ['px-5'],
      },
    ],
  }
)
