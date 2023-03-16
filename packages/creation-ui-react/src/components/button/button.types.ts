import type React from 'react'
import type { Colors, ElementSize, ElementVariant } from '../../types'

export type ButtonProps = React.ComponentProps<'button'> & {
  /**
   * Is button loading?
   */
  loading?: boolean
  /**
   * Is button a circle?
   */
  circle?: boolean
  /**
   * What variant should button be ?
   */
  variant?: ElementVariant
  /**
   * How large should the button be?
   */
  size?: ElementSize
  /**
   * Icon to be displayed on the left side of the button
   */
  iconLeft?: React.ReactNode
  /**
   * Icon to be displayed on the right side of the button
   */
  iconRight?: React.ReactNode
  /**
   * Color of the button
   */
  color?: Colors
}

export type ButtonGroupProps = React.ComponentProps<'div'> & {}

export type ColorPower = {
  default: number | string
  hover: number | string
  focus: number | string
  active: number | string
}
