import { twMerge } from 'tailwind-merge'
import { useTheme } from '../../theme'
import { overlay } from './classes'
import type { OverlayProps } from './overlay.types'

export const Overlay = ({
  active,
  onClick,
  className,
  cursorWait,
  children,
}: OverlayProps) => {
  const { zIndex } = useTheme()

  return (
    <div
      className={twMerge(
        overlay({
          visible: active,
          cursorWait,
        }),
        zIndex?.overlays,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
