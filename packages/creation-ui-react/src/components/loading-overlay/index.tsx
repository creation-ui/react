import clsx from 'clsx'
import { useTheme } from '../../theme'
import { Loader } from '../loader'
import { overlay } from '../overlay/classes'
import type { LoadingOverlayProps } from './loading-overlay.types'

export const LoadingOverlay = ({
  active,
  className,
  ...props
}: LoadingOverlayProps) => {
  const { zIndex, size: defaultSize } = useTheme()
  const { size = defaultSize, white } = props
  return active ? (
    <div {...props} className={clsx(overlay, zIndex?.overlays, className)}>
      <Loader size={size} white={white} />
    </div>
  ) : null
}
