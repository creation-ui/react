import clsx from 'clsx'
import { forwardRef } from 'react'

export const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx(className)} {...props} />
))
