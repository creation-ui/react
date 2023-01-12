import { useTheme } from '../../theme'
import clsx from 'clsx'
import type { StatusBadgeProps } from './status-badge.types'
import { badge } from './classes'
import { text } from '../../classes'

const StatusBadge = (props: StatusBadgeProps) => {
  const { size: defaultSize } = useTheme()
  const { label, status, size = defaultSize } = props

  return (
    <span className={clsx(text({ size }), badge({ size, status }))}>
      {label ?? status}
    </span>
  )
}

export default StatusBadge
