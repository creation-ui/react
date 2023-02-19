import type { ElementSize, ElementStatus } from '../../types'

export interface StatusBadgeProps {
  /**
   * Status of the element
   */
  status?: ElementStatus
  /**
   * How large should the button be?
   */
  border?: boolean
  /**
   * Should have border?
   */
  size?: ElementSize
  /**
   * Contents
   */
  label?: string
}
