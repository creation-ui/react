import { cva } from 'class-variance-authority'
import React from 'react'
import { useTheme } from '../../theme'

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  variant?: 'outlined' | 'text'
}

const tableBodyClasses = cva([], {
  variants: {
    variant: {
      outlined: '[&_tr:last-child]:border-0',
      text: '',
      false: '',
    },
  },
})

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  TableBodyProps
>(({ className, ...props }, ref) => {
  const { variant: defaultVariant } = useTheme()
  const { variant = defaultVariant, ...rest } = props
  return (
    <tbody
      ref={ref}
      // @ts-expect-error
      className={tableBodyClasses({ className, variant })}
      {...rest}
    />
  )
})
