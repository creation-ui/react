import type { ElementSize } from '../../types'
import type React from 'react'

export type RadioGroupProps = Omit<React.ComponentProps<'div'>, 'size'> & {
  /**
   * How large should the button be?
   */
  size?: ElementSize
  /**
   * Label
   */
  label?: React.ReactNode
  /**
   * Text to be displayed when input is invalid #TODO
   */
  error?: React.ReactNode
  disabled?: boolean
  required?: boolean
  readOnly?: boolean
  helperText?: React.ReactNode
}

export type RadioProps = Omit<React.ComponentProps<'input'>, 'size'> & {
  /**
   * How large should the button be?
   */
  size?: ElementSize
  /**
   * Label
   */
  label?: React.ReactNode
  /**
   * Helper text #TODO
   */
  helperText?: React.ReactNode
  /**
   * Text to be displayed when input is invalid #TODO
   */
  error?: React.ReactNode
}
