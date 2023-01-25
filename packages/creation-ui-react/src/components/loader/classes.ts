import { cva } from 'class-variance-authority'

const size = {
  sm: ['w-6', 'h-6'],
  md: ['w-8', 'h-8'],
  lg: ['w-10', 'h-10'],
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
export const loaderIcon = cva(['mr-2', 'animate-spin'], {
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
