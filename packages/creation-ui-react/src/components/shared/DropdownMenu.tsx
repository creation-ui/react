import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'

interface DropdownMenuProps extends React.HTMLProps<HTMLUListElement> {
  open?: boolean
  placement?: 'top' | 'bottom'
}

export const dropdownMenuClasses = cva(
  [
    'bg-white',
    'shadow-md',
    'w-fit',
    'border',
    'rounded-md',
    'flex',
    'flex-col',
    'gap-1',
    'p-1',
    'dark:bg-info-800',
    'dark:border-info-700',
    'remove-ring',
  ],
  {
    variants: {
      open: { true: 'block', false: 'hidden' },
      placement: {
        top: ['!mb-1'],
        bottom: ['!mt-0'],
      },
    },
  }
)

export const DropdownMenu = forwardRef<HTMLUListElement, DropdownMenuProps>(
  ({ children, open, className, placement, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        {...props}
        className={dropdownMenuClasses({ open, className, placement })}
      >
        {children}
      </ul>
    )
  }
)
