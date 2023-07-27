import { useTheme } from '../../theme'
import { ClearButton } from '../clear-button'
import { chipClasses } from './classes'
import type { ChipProps } from './chip.types'

export const Chip = (props: ChipProps) => {
  const {
    //
    size: defaultSize,
  } = useTheme()

  const {
    //
    label,
    status,
    size = defaultSize,
    variant,
    onDelete,
    onClick,
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
        interactive: !!onClick,
      })}
      onClick={onClick}
    >
      <div className='min-w-[8px]'>{startAdornment}</div>
      <span>{label ?? status}</span>
      <div className='min-w-[8px]'>
        {onDelete && (
          <div className='bg-info-50 dark:bg-info-500/50 p-[1px] m-[2px] rounded-full'>
            <ClearButton onClick={onDelete} />
          </div>
        )}
      </div>
    </div>
  )
}

Chip.displayName = 'StatusBadge'
