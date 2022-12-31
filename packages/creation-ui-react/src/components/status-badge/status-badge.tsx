import { useTheme } from '@theme'
import clsx from 'clsx'
import { StatusBadgeProps } from './status-badge.types'

const StatusBadge = (props: StatusBadgeProps) => {
  const { size: defaultSize } = useTheme()
  const { label, status, size = defaultSize } = props

  return (
    <span
      className={clsx(
        'status-badge',
        `status-badge--${size}`,
        status && `status-badge--${status}`
      )}
    >
      {label ?? status}
    </span>
  )
}

export default StatusBadge
