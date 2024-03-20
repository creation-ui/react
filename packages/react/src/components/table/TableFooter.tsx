import { cva } from 'class-variance-authority'
import React from 'react'
import { useTheme } from '../../theme'

interface TableFooterProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  variant?: 'outlined' | 'text'
}

const tableFooterClasses = cva(['font-medium'], {
  variants: {
    variant: {
      outlined: ['border-t', '[&>tr]:last:border-b-0'],
      text: '',
      false: '',
    },
  },
})

export const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  TableFooterProps
>(({ className, ...props }, ref) => {
  const { variant: defaultVariant } = useTheme()
  const { variant = defaultVariant, ...rest } = props

  return (
    <tfoot
      ref={ref}
      // @ts-expect-error
      className={tableFooterClasses({ className, variant })}
      {...{ ...rest }}
    />
  )
})
