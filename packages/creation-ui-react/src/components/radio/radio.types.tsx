import { ElementSize } from '@creation-ui/core'
import React from 'react'

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
