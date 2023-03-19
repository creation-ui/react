import { cva } from 'class-variance-authority'

const size = {
  sm: ['w-4', 'h-4'],
  md: ['w-6', 'h-6'],
  lg: ['w-8', 'h-8'],
}

export const loader = cva(
  ['flex', 'justify-center', 'items-center', 'select-none'],
  {
    variants: {
      size,
    },
    defaultVariants: {
      size: 'md',
    },
  }
)
export const loaderIcon = cva(['animate-spin'], {
  variants: {
    size,
    white: {
      true: ['text-zinc-300', 'fill-white'],
      false: ['text-zinc-200', 'fill-primary-500'],
    },
  },
  defaultVariants: {
    white: false,
    // size: 'md',
  },
})
