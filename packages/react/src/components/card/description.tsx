import { forwardRef } from 'react'
import { twix } from '@creation-ui/core'

const classes = twix('text-sm text-info-400')

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={classes(className)} {...props} />
))
