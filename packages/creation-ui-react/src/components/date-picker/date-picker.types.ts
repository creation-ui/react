import type React from 'react'
import type DatePicker from 'react-datepicker'
import type { ClassName, ElementSize, ElementVariants } from '../../types'

export type DatePickerProps = DatePicker['props'] & {
  className?: ClassName
  size?: ElementSize
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
  /**
   * Is button loading?
   */
  loading?: boolean
  /**
   * What variant should button be ?
   */
  variant?: ElementVariants
}
