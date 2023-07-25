import { useTheme } from '../../theme'
import { ClearButton } from '../clear-button'
import { chipClasses } from './classes'
import type { StatusBadgeProps } from './status-badge.types'

export const StatusBadge = (props: StatusBadgeProps) => {
  const {
    //
    size: defaultSize,
    variant: defaultVariant = 'contained',
  } = useTheme()

  const {
    //
    label,
    status = 'info',
    size = defaultSize,
    variant = defaultVariant,
    onDelete,
    startAdornment = null,
    uppercase,
  } = props

  return (
    <div
      className={chipClasses({
        size,
        status,
        variant,
        uppercase,
      })}
    >
      {startAdornment}
      {label ?? status}
      {onDelete && <ClearButton onClick={onDelete} />}
    </div>
  )
}

StatusBadge.displayName = 'StatusBadge'
