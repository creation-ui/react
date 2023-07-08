import { twMerge } from 'tailwind-merge'

interface InputBaseContainerInnerProps {
  children?: React.ReactNode
  className?: string
}

const classes = ['relative', 'max-h-min']

export const InputBaseContainerInner = ({
  children,
  className,
}: InputBaseContainerInnerProps) => (
  <div className={twMerge(classes, className)}>{children}</div>
)
