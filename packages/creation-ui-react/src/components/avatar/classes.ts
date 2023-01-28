import { cva } from 'class-variance-authority'
import { getColor } from '../../utils/get-color'

export const avatar = {
  img: cva(
    [
      //
      'inline-block',
      'ring-2',
      'ring-white',
      'rounded-full',
    ],
    {
      variants: {
        size: {
          sm: ['h-12 w-12'],
          md: ['h-16 w-16'],
          lg: ['h-20 w-20'],
        },
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
      'transform',
      'translate-x-1/2',
      '-translate-y-1/2',
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
          right: ['right-[13%]'],
          left: ['left-[13%]'],
        },
        vertical: {
          top: ['top-[13%]'],
          bottom: ['bottom-[13%]'],
        },
        type: {
          count: ['!w-6', '!h-6'],
          dot: [],
        },
        color: {
          primary: [
            getColor('primary', 'bg', 600),
            getColor('primary', 'text', 100),
          ],
          warning: [
            getColor('warning', 'bg', 600),
            getColor('warning', 'text', 100),
          ],
          success: [
            getColor('success', 'bg', 600),
            getColor('success', 'text', 100),
          ],
          error: [
            //
            getColor('error', 'bg', 600),
            getColor('error', 'text', 100),
          ],
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
        primary: [getColor('primary', 'bg', 400)],
        warning: [getColor('warning', 'bg', 400)],
        success: [getColor('success', 'bg', 400)],
        error: [getColor('error', 'bg', 400)],
      },
    },
    defaultVariants: {
      color: 'error',
    },
  }),
  container: ['relative', 'w-fit'],
}
