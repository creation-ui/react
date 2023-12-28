import type { ElementPlacement } from '@creation-ui/core'
import type { CSSProperties } from 'react'
import type { AvatarVariant } from './avatar.types'
import { BADGE_OFFSET } from './constants'

export const calcPosition = (
  badgeSize: number,
  placement: ElementPlacement,
  variant: AvatarVariant,
  hasCount: boolean
): CSSProperties => {
  const rule: CSSProperties = {
    left: 'auto',
    right: 'auto',
    top: 'auto',
    bottom: 'auto',
  }

  if (!placement) return rule

  const badgeOffset = badgeSize * BADGE_OFFSET[variant]
  const sign = variant === 'circle' ? -1 : 1

  switch (placement.vertical) {
    case 'top':
      rule.top = sign * badgeOffset
      break
    case 'bottom':
      rule.bottom = sign * badgeOffset
      break
  }

  switch (placement.horizontal) {
    case 'left':
      rule.left = badgeOffset
      break
    case 'right':
      rule.right = badgeOffset
      break
  }

  return rule
}
