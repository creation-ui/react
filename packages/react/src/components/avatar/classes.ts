import { cva } from 'class-variance-authority'

export const avatar = {
  img: cva(
    [
      //
      'inline-block',
      'ring-2',
      'ring-white',
    ],
    {
      variants: {
        variant: {
          circle: ['rounded-full'],
          rounded: ['rounded-md'],
          square: ['rounded-none'],
        },
      },
      defaultVariants: {
        variant: 'circle',
      },
    }
  ),
  notifications: cva(
    [
      'rounded-full',
      'bg-error-600',
      'text-error-100',
      'absolute',
      'outline',
      'outline-2',
      'outline-white',
      'text-sm',
      'inline-flex',
      'leading-none',
      'text-center',
      'p-1.5',
      'items-center',
      'justify-center',
      // '-translate-x-1/2',
    ],
    {
      variants: {
        color: {
          primary: ['bg-primary-500', 'text-primary-100'],
          warning: ['bg-warning-500', 'text-warning-100'],
          success: ['bg-success-500', 'text-success-100'],
          error: ['bg-error-500', 'text-error-100'],
          info: ['bg-info-500', 'text-info-100'],
        },
      },
      defaultVariants: {
        color: 'error',
      },
    }
  ),
  pulse: cva([], {
    variants: {
      pulse: {
        true: [
          'block',
          'absolute',
          'rounded-full',
          'opacity-75',
          'animate-ping',
          'min-h-fit',
          'min-w-fit',
        ],
        false: ['hidden'],
      },
      color: {
        primary: ['bg-primary-400'],
        warning: ['bg-warning-400'],
        success: ['bg-success-400'],
        error: ['bg-error-400'],
        info: ['bg-info-400'],
      },
    },
    defaultVariants: {
      color: 'error',
    },
  }),
  container: ['relative', 'w-fit'],
}
