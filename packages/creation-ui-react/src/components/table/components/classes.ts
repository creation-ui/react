import { cva } from 'class-variance-authority'

export const cellClasses = cva([], {
  variants: {
    align: {
      left: 'justify-self-start	',
      center: 'justify-self-center',
      right: 'justify-self-end',
    },
    padding: {
      true: 'py-2',
      false: 'py-0',
    },
  },
  defaultVariants: {
    align: 'left',
    padding: true,
  },
})
