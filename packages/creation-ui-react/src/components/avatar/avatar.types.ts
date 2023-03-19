import type React from 'react'
import type {
  ClassName,
  ElementPlacement,
  ElementSize,
  ElementStatus,
} from '../../types'

export const AVATAR_VARIANTS = ['circle', 'rounded', 'square'] as const

export type AvatarVariant = (typeof AVATAR_VARIANTS)[number]

export type Badge = {
  /**
   * Vertical and horizontal placement of the badge
   */
  placement?: ElementPlacement
  /**
   * Notification badge pulsing?
   */
  pulse?: boolean
} & {
  /**
   * Badge type
   */
  type: 'dot' | 'count'
  /**
   * Badge notifications count
   */
  count?: number
  /**
   * Notifications color
   */
  color?: ElementStatus
}

type AvatarProps = Omit<React.ComponentProps<'img'>, 'size'> & {
  /**
   * How large should the button be?
   */
  size?: ElementSize
  /**
   * Class name
   */
  className?: ClassName
  /**
   * Notification badge
   */
  badge?: Badge
}
export default AvatarProps
