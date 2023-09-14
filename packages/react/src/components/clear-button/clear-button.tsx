import { forwardRef } from 'react'
import { ElementSize } from '@creation-ui/core'
import { twMerge } from 'tailwind-merge'
import type { IconProps } from '../icon'
import { Icon } from '../icon'
import { cva } from 'class-variance-authority'
import { sharedSizeSquareCVA } from '@creation-ui/core'

const classes = cva(
  [
    'hover:fill-error-500',
    'dark:hover:fill-error-500',
    'cursor-pointer',
    'select-none',
    'z-0',
    'h-4',
    'w-4',
  ],
  {
    variants: {
      size: sharedSizeSquareCVA,
    },
  }
)

export interface ClearButtonProps extends Omit<IconProps, 'icon' | 'size'> {
  size?: ElementSize
}

const ClearButton = forwardRef<any, ClearButtonProps>(
  ({ onClick, className, size, ...props }, ref) => (
    <Icon
      ref={ref}
      icon='close'
      onClick={onClick}
      className={twMerge(classes({ size }), className)}
      aria-hidden='true'
      {...props}
    />
  )
)

ClearButton.displayName = 'ClearButton'

export default ClearButton
