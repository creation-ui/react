import clsx from 'clsx'
import React from 'react'

interface ContainerProps {
  children?: React.ReactNode
  className?: string
  variant?: ContainerVariants
}

type ContainerVariants = 'row' | 'column'

const classes: Record<ContainerVariants | 'base' | 'centered', string[]> = {
  base: ['flex', 'my-10'],
  column: ['flex-col', 'items-center', 'gap-10'],
  row: ['place-items-center', 'gap-5', 'justify-center'],
  centered: ['justify-center', 'place-items-center', 'gap-5'],
}

export const Container = ({
  children,
  className,
  variant = 'row',
  ...props
}: ContainerProps) => {
  // const count = Children.count(children)
  // const v = count > 1 ? variant : 'centered'
  return (
    <div className={clsx(classes.base, classes[variant], className)} {...props}>
      {children}
    </div>
  )
}
