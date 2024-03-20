import { cva } from 'class-variance-authority'
import React from 'react'
import { useTheme } from '../../theme'

interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  variant?: 'outlined' | 'text'
}

const tableHeaderClasses = cva([], {
  variants: {
    variant: {
      outlined: ['[&_tr]:border-b'],
      text: '',
      false: '',
    },
  },
})

export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  TableHeaderProps
>(({ className, ...props }, ref) => {
  const { variant: defaultVariant } = useTheme()
  const { variant = defaultVariant, ...rest } = props

  return (
    <thead
      ref={ref}
      className={tableHeaderClasses({
        className,
        // @ts-expect-error
        variant,
      })}
      {...rest}
    />
  )
})
