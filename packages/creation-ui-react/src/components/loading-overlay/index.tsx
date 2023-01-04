import { Loader } from '../'
import { useTheme } from '../../theme'
import clsx from 'clsx'
import { LoadingOverlayProps } from './loading-overlay.types'
import { overlay } from '../overlay/classes'

export const LoadingOverlay = ({
  active,
  className,
  ...props
}: LoadingOverlayProps) => {
  const { zIndex, size: defaultSize } = useTheme()
  const { size = defaultSize, white } = props
  return active ? (
    <div {...props} className={clsx(overlay, zIndex.overlays, className)}>
      <Loader size={size} white={white} />
    </div>
  ) : null
}
