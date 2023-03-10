import type React from 'react'
import type {
  BaseComponentProps,
  ElementSize,
  ElementVariants,
} from '../../types'

export type InputProps = Omit<React.ComponentProps<'input'>, 'size'> &
  BaseComponentProps & {
    /**
     * Input type
     * @default input
     */
    as?: any
    /**
     * Is button loading?
     */
    loading?: boolean
    /**
     * What variant should button be ?
     */
    variant?: ElementVariants
    /**
     * Icon to be displayed on the left side of the input
     */
    iconLeft?: React.ReactNode
    /**
     * Icon to be displayed on the right side of the input
     */
    iconRight?: React.ReactNode
    /**
     * Is button fullwidth?
     */
    fullWidth?: boolean
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
