import type { BaseComponentProps, ElementStatus } from '../../types'

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
}
