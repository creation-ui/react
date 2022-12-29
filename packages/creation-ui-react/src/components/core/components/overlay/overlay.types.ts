import { SharedClassName } from '../../types'

export interface OverlayProps extends SharedClassName {
  active?: boolean
  onClick?: () => void
}
