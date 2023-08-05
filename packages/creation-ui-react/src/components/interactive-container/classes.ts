import { cva } from 'class-variance-authority'

export const interactiveContainerClasses = cva([], {
  variants: {
    disabled: {
      true: ['cursor-not-allowed'],
    },
  },
})
