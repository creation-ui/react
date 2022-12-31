import { ElementSize, ElementStatus } from '@types'

export interface StatusBadgeProps {
  /**
   * Status of the element
   */
  status?: ElementStatus
  /**
   * How large should the button be?
   */
  size?: ElementSize
  /**
   * Contents
   */
  label?: string
}
