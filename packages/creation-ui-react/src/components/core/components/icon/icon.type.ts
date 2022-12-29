import { HTMLProps } from 'react'
import { icons } from './list-of-icons'

export interface IconProps
  extends Omit<HTMLProps<HTMLDivElement>, 'className'> {
  /**
   * Icon name from Material Icons collection
   */
  icon: MaterialIcon
  /**
   * Additional class names
   */
  className?: string
}

export type MaterialIcon = typeof icons[number]
