import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputBaseContainerInnerProps {
  children?: React.ReactNode
  className?: string
}

const classes = ['relative', 'max-h-min']

// TODO: ref should be passed to input/textarea/select!
export const InputBaseContainerInner = forwardRef<
  HTMLDivElement,
  InputBaseContainerInnerProps
>(({ children, className }, ref) => (
  <div className={twMerge(classes, className)} ref={ref}>
    {children}
  </div>
))
