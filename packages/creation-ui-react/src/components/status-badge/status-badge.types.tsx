import type {
  BaseComponentProps,
  ElementStatus,
  ElementVariant,
} from '../../types'

export interface StatusBadgeProps
  extends Pick<BaseComponentProps, 'className' | 'size' | 'label'> {
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
}
