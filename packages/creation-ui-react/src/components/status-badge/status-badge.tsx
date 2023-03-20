import { useTheme } from '../../theme'
import { badge } from './classes'
import type { StatusBadgeProps } from './status-badge.types'

export const StatusBadge = (props: StatusBadgeProps) => {
  const { size: defaultSize } = useTheme()
  const {
    //
    label,
    status = 'info',
    size = defaultSize,
    variant = 'contained',
  } = props

  return (
    <div
      className={badge({
        size,
        status,
        variant,
      })}
    >
      {label ?? status}
    </div>
  )
}

StatusBadge.displayName = 'StatusBadge'
