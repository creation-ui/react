import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'

interface DropdownMenuProps extends React.HTMLProps<HTMLUListElement> {
  open?: boolean
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
    '!outline-none',
    '!ring-none'
  ],
  {
    variants: {
      open: { true: 'block', false: 'hidden' },
      placement: {
        top: ['!mb-1'],
        bottom: ['mt-1'],
      },
    },
  }
)

export const DropdownMenu = forwardRef<HTMLUListElement, DropdownMenuProps>(
  ({ children, open, className, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        {...props}
        className={dropdownMenuClasses({ open, className })}
      >
        {children}
      </ul>
    )
  }
)
