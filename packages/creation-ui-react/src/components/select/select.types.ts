import { ElementSize, SelectOptionsType } from '@creation-ui/core'
import React from 'react'

export interface SelectProps {
  /**
   * Element id
   */
  id?: string
  /**
   * Placeholder
   */
  label?: React.ReactNode
  /**
   * Helper text
   */
  helperText?: string
  /**
   * Input error
   */
  error?: string
  /**
   * Placeholder
   */
  placeholder?: string
  /**
   * Class names
   */
  className?: string
  /**
   * List options
   */
  options?: SelectOptionsType[]
  /**
   * Component to display list options
   */
  optionComponent?: (option: SelectOptionsType) => React.ReactNode
  /**
   * Component to display selected option
   */
  selectedOptionFormatter?: (option?: SelectOptionsType) => string
  /**
   * Default value to display when component is not controlled
   */
  defaultValue?: SelectOptionsType
  /**
   * Current value to display
   */
  value?: SelectOptionsType | SelectOptionsType[]
  // flags
  /**
   * Is disabled
   */
  disabled?: boolean
  /**
   * Allow selection of multiple value
   */
  multiple?: boolean

  highlightSearch?: boolean

  onChange?: (value: SelectOptionsType) => void

  size?: ElementSize

  clearable?: boolean

  clearButtonText?: string
}
