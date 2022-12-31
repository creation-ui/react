import { Icon, IconProps } from '@components/icon'
import clsx from 'clsx'

const ClearButton = ({
  onClick,
  className,
  ...props
}: Omit<IconProps, 'icon'>) => (
  <Icon
    icon='close'
    onClick={onClick}
    className={clsx('clear-button', className)}
    aria-hidden='true'
    {...props}
  />
)

export default ClearButton
