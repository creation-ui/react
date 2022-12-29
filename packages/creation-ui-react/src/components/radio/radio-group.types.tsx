import { ElementSize } from '@creation-ui/core'
import React from 'react'

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
}
