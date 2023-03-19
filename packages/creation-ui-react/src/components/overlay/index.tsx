import { twMerge } from 'tailwind-merge'
import { useTheme } from '../../theme'
import { overlay } from './classes'
import type { OverlayProps } from './overlay.types'

export const Overlay = ({ active, onClick, className }: OverlayProps) => {
  const { zIndex } = useTheme()
  return active ? (
    <div>
      <div
        className={twMerge(overlay, zIndex?.overlays, className)}
        onClick={onClick}
      >
        &nbsp;
      </div>
    </div>
  ) : null
}
