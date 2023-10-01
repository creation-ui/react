import type { ClassName, ElementPosition } from '@creation-ui/core'

export interface TooltipProps {
  className?: ClassName
  children?: React.ReactNode
  content?: React.ReactNode
  position?: ElementPosition
}
