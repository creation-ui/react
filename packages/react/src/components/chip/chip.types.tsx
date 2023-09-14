import { ReactNode } from 'react'
import type {
  BaseComponentProps,
  ElementBaseVariant,
  ElementStatus,
} from '@creation-ui/core'

export interface ChipProps
  extends Pick<BaseComponentProps, 'className' | 'size' | 'label'> {
  /**
   * Should be uppercase?
   */
  uppercase?: boolean
  /**
   * Status of the element
   */
  status?: ElementStatus
  /**
   * Should have border?
   */
  border?: boolean
  /**
   * Variant
   */
  variant?: ElementBaseVariant
  /**
   * Start adornment
   */
  startAdornment?: ReactNode
  /**
   * Callback when delete button is clicked
   */
  onDelete?: () => void
  /**
   *
   * Callback when chip is clicked
   */
  onClick?: () => void
}
