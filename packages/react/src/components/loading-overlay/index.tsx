import { Loader } from '../loader'
import { Overlay } from '../overlay'
import type { LoadingOverlayProps } from './loading-overlay.types'

export const LoadingOverlay = ({
  className,
  ...props
}: LoadingOverlayProps) => {
  const { size, white, ...rest } = props
  return (
    <Overlay {...rest} cursorWait>
      <Loader size={size} white={white} active={props.active} />
    </Overlay>
  )
}
