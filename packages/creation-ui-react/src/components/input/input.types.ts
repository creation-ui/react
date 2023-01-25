import type React from 'react'
import type { ElementSize, ElementVariants } from '../../types'

export type InputProps = Omit<React.ComponentProps<'input'>, 'size'> & {
  /**
   * Input type
   * @default input
   */
  as: any,
  /**
   * Is button loading?
   */
  loading?: boolean
  /**
   * What variant should button be ?
   */
  variant?: ElementVariants
  /**
   * How large should the button be?
   */
  size?: ElementSize
  /**
   * Icon to be displayed on the left side of the input
   */
  iconLeft?: React.ReactNode
  /**
   * Icon to be displayed on the right side of the input
   */
  iconRight?: React.ReactNode
  /**
   * Label
   */
  label?: React.ReactNode
  /**
   * Is button fullwidth?
   */
  fullWidth?: boolean
  /**
   * Helper text
   */
  helperText?: React.ReactNode
  /**
   * Text to be displayed when input is invalid
   */
  error?: React.ReactNode
}

export type HTMLInputType =
  | 'text'
  | 'password'
  | 'submit'
  | 'reset'
  | 'radio'
  | 'checkbox'
  | 'button'
  | 'file'
  | 'image'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'url'
  | 'week'
  | 'search'
  | 'tel'
