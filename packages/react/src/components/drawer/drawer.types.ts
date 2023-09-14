import type { ElementPosition } from '@creation-ui/core'

export interface DrawerProps {
  children?: React.ReactNode
  position?: ElementPosition
  open?: boolean
  onClose?: () => void
  onOverlayClick?: () => void
}
