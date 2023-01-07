import { ClassName } from '../../types'
import { ElementPosition } from '../../types'

export interface TooltipProps {
  className?: ClassName
  children?: React.ReactNode
  content?: React.ReactNode
  position?: ElementPosition
}
