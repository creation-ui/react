import type {
  AutocompleteOptionsType,
  ClassName,
  ElementSize,
} from '../../types'
import type React from 'react'

export interface AutocompleteProps {
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
  className?: ClassName
  /**
   * List options
   */
  options?: AutocompleteOptionsType[]
  /**
   * Component to display list options
   */
  optionComponent?: (option: AutocompleteOptionsType) => React.ReactNode
  /**
   * Component to display selected option
   */
  selectedOptionFormatter?: (option: AutocompleteOptionsType) => string
  /**
   * Default value to display when component is not controlled
   */
  defaultValue?: AutocompleteOptionsType
  /**
   * Current value to display
   */
  value?: AutocompleteOptionsType
  /**
   * Close button tooltip text
   */
  emptyText?: React.ReactNode
  /**
   * Not found text
   */
  notFoundText?: React.ReactNode
  /**
   * Loading icon tooltip text
   */
  loadingText?: React.ReactNode
  /**
   * Clear button tooltip text
   */
  clearText?: string
  /**
   * Close button tooltip text
   */
  closeText?: React.ReactNode
  // flags
  /**
   * Should display clear value button
   */
  clearable?: boolean
  /**
   * Is field required
   */
  required?: boolean
  /**
   * Is disabled
   */
  disabled?: boolean
  /**
   * Allow selection of multiple value
   */
  multiple?: boolean
  /**
   * Should highlight matched text TODO: not implemented
   */
  highlightSearch?: boolean
  /**
   * Limit of multiple selected to be displayed in input
   */
  limit?: number
  /**
   * Format of count of multiple selected to be displayed in input
   */
  getLimitText: (more: number) => string
  /**
   * Element size
   */
  size?: ElementSize

  onChange?: (value: AutocompleteOptionsType) => void

  loading?: boolean
  readOnly?: boolean
}
