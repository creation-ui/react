import { twMerge } from 'tailwind-merge'
import type { IconProps } from '../icon'
import { Icon } from '../icon'

const classes = [
  'hover:fill-error-500',
  'dark:hover:fill-error-500',
  'cursor-pointer',
  'select-none',
  'z-0',
  'h-4',
  'w-4',
]

const ClearButton = ({
  onClick,
  className,
  ...props
}: Omit<IconProps, 'icon'>) => (
  <Icon
    icon='close'
    onClick={onClick}
    className={twMerge(classes, className)}
    aria-hidden='true'
    {...props}
  />
)

export default ClearButton
