import { ElementPosition } from '@creation-ui/core'

export interface DrawerProps {
  size?: number | string
  children?: React.ReactNode
  position?: ElementPosition
  open?: boolean
  onClose?: () => void
  onOverlayClick?: () => void
}
