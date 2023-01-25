import type { HTMLProps } from 'react'
import type { ClassName, IconType } from '../../types'

export interface IconProps
  extends Omit<HTMLProps<HTMLDivElement>, 'className'> {
  /**
   * Icon name from Material Icons collection
   */
  icon: IconType
  /**
   * Additional class names
   */
  className?: ClassName
}
