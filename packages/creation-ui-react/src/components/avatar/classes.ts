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
        size: {
          sm: ['h-12 w-12'],
          md: ['h-16 w-16'],
          lg: ['h-20 w-20'],
        },
        variant: {
          circle: ['rounded-full'],
          rounded: ['rounded-md'],
          square: ['rounded-none'],
        },
      },
      defaultVariants: {
        size: 'md',
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
      'p-1.5',
      // 'm-2',
      'outline',
      'outline-white',
      'text-sm',
      'inline-flex',
      // 'transform',
      // 'translate-x-1/2',
      // 'translate-y-1/2',
      'items-center',
      'justify-center',
      'leading-none',
    ],
    {
      variants: {
        size: {
          sm: ['w-3', 'h-3'],
          md: ['w-4', 'h-4'],
          lg: ['w-5', 'h-5'],
        },
        horizontal: {
          right: ['right-0'],
          left: ['left-0'],
        },
        vertical: {
          top: ['top-0'],
          bottom: ['bottom-0'],
        },
        type: {
          count: ['!w-6', '!h-6'],
          dot: [],
        },
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
        ],
        false: ['hidden'],
      },
      size: {
        sm: ['w-5', 'h-5'],
        md: ['w-6', 'h-6'],
        lg: ['w-6', 'h-6'],
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
