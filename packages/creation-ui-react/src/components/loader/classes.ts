import { cva } from 'class-variance-authority'
import { microInteractions } from '../../classes'

const size = {
  sm: ['w-4', 'h-4'],
  md: ['w-6', 'h-6'],
  lg: ['w-8', 'h-8'],
}

export const loaderClasses = cva(
  ['flex', 'justify-center', 'items-center', 'select-none', microInteractions],
  {
    variants: {
      size,
      active: {
        true: 'opacity-100',
        false: 'opacity-0',
      },
    },
    defaultVariants: {
      size: 'md',
      active: true,
    },
  }
)
export const loaderIconClasses = cva(['animate-spin'], {
  variants: {
    size,
    white: {
      true: ['text-info-300', 'fill-white'],
      false: ['text-info-200', 'fill-primary-500'],
    },
  },
  defaultVariants: {
    white: false,
    // size: 'md',
  },
})
