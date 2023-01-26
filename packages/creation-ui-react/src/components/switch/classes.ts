import { cva } from 'class-variance-authority'
import { shared } from '../../classes'

export const switchClasses = cva(
  [
    ...shared.input,
    'cursor-pointer',
    'relative',
    'inline-flex',
    'shrink-0',
    'border-transparent',
    '!bg-zinc-300',
    '!dark:bg-zinc-700',
    '!rounded-full',
    'border-2',
    'transition-all',
    'duration-300',
    'ease-in-out',
  ],
  {
    variants: {
      size: {
        sm: ['h-[22px]', 'w-[42px]'],
        md: ['h-[25px]', 'w-[52px]'],
        lg: ['h-[29px]', 'w-[57px]'],
      },
      checked: {
        true: ['!bg-primary-500', '!border-primary-500'],
        false: [],
      },
    },
  }
)
export const switchCircle = cva(
  [
    'inline-block',
    'transform',
    'transition-all',
    'rounded-full',
    'bg-white',
    'shadow-lg',
    'ring-0',
    'transition',
    'duration-300',
    'ease-in-out',
  ],
  {
    variants: {
      size: {
        sm: ['h-[18px]', 'w-[18px]'],
        md: ['h-[21px]', 'w-[21px]'],
        lg: ['h-[25px]', 'w-[25px]'],
      },
      checked: {
        true: ['translate-x-full'],
        false: ['translate-x-0'],
      },
    },
    compoundVariants: [
      {
        checked: true,
        size: 'sm',
        className: ['translate-x-5'],
      },
      {
        checked: true,
        size: 'md',
        className: ['translate-x-7'],
      },
      {
        checked: true,
        size: 'lg',
        className: ['translate-x-7'],
      },
    ],
  }
)
