import { AvatarVariant } from './avatar.types'

export const NOTIFICATION_SIZE_MODIFIER = 0.25
export const BADGE_SIZE_MODIFIER = 0.3
export const BADGE_FONT_SIZE_MODIFIER = 0.2

export const BADGE_OFFSET: Record<AvatarVariant, number> = {
  circle: -0.15,
  rounded: 0,
  square: -1,
}

export const AVATAR_SIZE_MAP = {
  sm: 40,
  md: 60,
  lg: 80,
}
