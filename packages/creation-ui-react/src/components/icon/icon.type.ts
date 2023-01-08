import type { ClassName } from '../../types'
import type { HTMLProps } from 'react'
import type { icons } from './list-of-icons'

export interface IconProps
  extends Omit<HTMLProps<HTMLDivElement>, 'className'> {
  /**
   * Icon name from Material Icons collection
   */
  icon: MaterialIcon
  /**
   * Additional class names
   */
  className?: ClassName
}

export type MaterialIcon = typeof icons[number]
