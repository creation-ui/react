import clsx from 'clsx'
import { forwardRef, useMemo, useRef } from 'react'
import { Show } from '../show'
import type AvatarProps from './avatar.types'
import { avatar } from './classes'
import {
  AVATAR_SIZE_MAP,
  BADGE_FONT_SIZE_MODIFIER,
  BADGE_SIZE_MODIFIER,
  NOTIFICATION_SIZE_MODIFIER,
} from './constants'
import { calcPosition } from './utils'
import { useMeasureDirty } from '../../hooks'

const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { badge, variant = 'circle', ...rest } = props

  const notifRef = useRef<HTMLDivElement>(null)
  const { width } = useMeasureDirty(notifRef)

  const size =
    typeof props.size === 'number' ? props.size : AVATAR_SIZE_MAP[props.size]

  const { calculatedPosition, badgeSize, hasCount } = useMemo(() => {
    const hasCount = !!badge?.count
    const badgeSize = Math.ceil(
      (hasCount ? BADGE_SIZE_MODIFIER : NOTIFICATION_SIZE_MODIFIER) * size
    )
    return {
      calculatedPosition: calcPosition(
        width,
        badge?.placement,
        variant,
        hasCount
      ),
      badgeSize,
      hasCount,
    }
  }, [badge?.placement, variant])

  return (
    <div ref={ref} className={clsx(avatar.container)}>
      <img
        {...rest}
        className={avatar.img({ variant })}
        style={{
          ...props.style,
          width: size,
          height: size,
        }}
      />
      <Show when={!!props.badge}>
        <div
          ref={notifRef}
          className={avatar.notifications({ color: badge?.color })}
          style={{
            aspectRatio: 1,
            minHeight: badgeSize,
            minWidth: badgeSize,
            ...calculatedPosition,
          }}
        >
          <Show when={hasCount}>
            <div
              style={{
                fontSize: size * BADGE_FONT_SIZE_MODIFIER,
              }}
            >
              {props.badge?.count}
            </div>
          </Show>
          <Show when={props.badge?.pulse}>
            <div
              className={avatar.pulse({
                pulse: badge?.pulse,
                color: badge?.color,
              })}
              style={{
                width: badgeSize * 1.1,
                height: badgeSize * 1.1,
              }}
            />
          </Show>
        </div>
      </Show>
    </div>
  )
})

Avatar.defaultProps = {
  size: 'md',
}

export default Avatar
