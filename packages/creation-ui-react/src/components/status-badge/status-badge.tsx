import { useTheme } from '../../theme'
import { badge } from './classes'
import type { StatusBadgeProps } from './status-badge.types'

const StatusBadge = (props: StatusBadgeProps) => {
  const { size: defaultSize } = useTheme()
  const { label, status = 'default', size = defaultSize, border } = props

  return (
    <div
      className={badge({
        size,
        status,
        border: border ? status : undefined,
      })}
    >
      {label ?? status}
    </div>
  )
}

export default StatusBadge
