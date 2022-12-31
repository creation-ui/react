import { useTheme } from '../../theme'
import clsx from 'clsx'
import { OverlayProps } from './overlay.types'

export const Overlay = ({ active, onClick, className }: OverlayProps) => {
  const { zIndex } = useTheme()
  return active ? (
    <div>
      <div
        className={clsx('overlay', zIndex.overlays, className)}
        onClick={onClick}
      >
        &nbsp;
      </div>
    </div>
  ) : null
}
