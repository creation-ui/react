import { ReactNode } from 'react'
import type {
  BaseComponentProps,
  ElementStatus,
  ElementVariant,
} from '../../types'

export interface StatusBadgeProps
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
  variant?: ElementVariant
  /**
   * Callback when delete button is clicked
   */
  startAdornment?: ReactNode
  /**
   * Callback when delete button is clicked
   */
  onDelete?: () => void
}
