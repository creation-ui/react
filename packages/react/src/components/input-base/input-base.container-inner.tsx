import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputBaseContainerInnerProps {
  children?: React.ReactNode
  className?: string
}

const classes = ['relative', 'max-h-min']

export const InputBaseContainerInner = forwardRef<
  HTMLDivElement,
  InputBaseContainerInnerProps
>(({ children, className }, ref) => (
  <div className={twMerge(classes, className)} ref={ref}>
    {children}
  </div>
))
