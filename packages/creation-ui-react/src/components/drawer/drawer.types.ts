import type { ElementPosition } from '../../types'

export interface DrawerProps {
  children?: React.ReactNode
  position?: ElementPosition
  open?: boolean
  onClose?: () => void
  onOverlayClick?: () => void
}
