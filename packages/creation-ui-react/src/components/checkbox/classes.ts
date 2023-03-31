import { cva } from 'class-variance-authority'
import { classes } from '../../classes'

export const checkbox = cva([classes.input, classes.checkable], {
  variants: {
    size: {
      sm: ['h-4', 'w-4', '!rounded'],
      md: ['h-5', 'w-5'],
      lg: ['h-6', 'w-6'],
    },
  },
})
