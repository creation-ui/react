import { cva } from 'class-variance-authority'

export const drawerAnimation = {
  animation: [
    //
    'transition',
    'ease-in-out',
    'duration-300',
    'transform',
  ],
  enter: {
    top: ['-translate-y-full'],
    bottom: ['translate-y-full'],
    right: ['translate-x-full'],
    left: ['-translate-x-full'],
  },
  leave: {
    top: ['translate-y-0'],
    bottom: ['translate-y-0'],
    right: ['translate-x-0'],
    left: ['translate-x-0'],
  },
}

export const child = [
  'bg-white',
  'dark:bg-info-900',
  'w-full',
  'overflow-hidden',
  'text-left',
  'shadow-xl',
]

export const drawer = cva(
  [
    //
    'fixed',
    'overflow-hidden',
    'w-full',
    'h-full',
    'shadow-lg',
  ],
  {
    variants: {
      position: {
        bottom: ['inset-x-0', 'bottom-0', 'md:h-1/2'],
        top: ['inset-x-0', 'top-0', 'md:h-1/2'],
        right: ['inset-y-0', 'right-0', 'md:w-1/2'],
        left: ['inset-y-0', 'left-0', 'md:w-1/2'],
      },
      size: {
        sm: [],
        md: [],
        lg: [],
      },
    },
    defaultVariants: {
      position: 'right',
      size: 'md',
    },
  }
)
