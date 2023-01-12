import { Icon } from '..'
import type { IconProps } from '..'
import clsx from 'clsx'

const classes = [
  'text-zinc-400',
  'hover:text-error-500',
  'cursor-pointer',
  'select-none',
]

const ClearButton = ({
  onClick,
  className,
  ...props
}: Omit<IconProps, 'icon'>) => (
  <Icon
    icon='close'
    onClick={onClick}
    className={clsx(classes, className)}
    aria-hidden='true'
    {...props}
  />
)

export default ClearButton
