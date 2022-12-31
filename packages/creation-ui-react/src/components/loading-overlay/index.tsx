import { Loader } from '@components/loader'
import { useTheme } from '@theme'
import clsx from 'clsx'
import { LoadingOverlayProps } from './loading-overlay.types'

const LoadingOverlay = ({
  active,
  className,
  ...props
}: LoadingOverlayProps) => {
  const { zIndex, size: defaultSize } = useTheme()
  const { size = defaultSize, white } = props
  return active ? (
    <div {...props} className={clsx(zIndex.overlays, 'overlay', className)}>
      <Loader size={size} white={white} />
    </div>
  ) : null
}
export default LoadingOverlay
