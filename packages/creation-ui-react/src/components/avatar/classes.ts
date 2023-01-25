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
          rounded: ['rounded-lg'],
          square: ['rounded-none'],
        },
      },
    }
  ),
  notifications: cva(
    [
      '-bottom-3',
      '-right-3',
      'rounded-full',
      'bg-error-600',
      'text-error-100',
      'absolute',
      'p-1.5',
      'm-2',
      'outline',
      'outline-white',
      'text-sm',
      'inline-flex',
    ],
    {
      variants: {
        horizontal: {
          right: ['-right-3'],
          left: ['-left-3'],
        },
        vertical: {
          top: ['-top-3'],
          bottom: ['-bottom-3'],
        },
        type: {
          count: [
            'items-center',
            'justify-center',
            'leading-none',
            'w-6',
            'h-6',
          ],
          dot: ['w-3', 'h-3'],
        },
      },
    }
  ),
  pulse: cva([], {
    variants: {
      pulse: {
        true: [
          'block',
          'left-0',
          'bottom-0',
          'p-1.5',
          'absolute',
          'rounded-full',
          'opacity-75',
          'animate-ping',
          'bg-error-400',
          'p-3',
        ],
        false: ['hidden'],
      },
    },
  }),
  container: ['relative', 'w-fit'],
}
