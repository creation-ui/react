import clsx from 'clsx'
import { forwardRef } from 'react'
import type AvatarProps from './avatar.types'
import { avatar } from './classes'

const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { size, badge, variant } = props

  const badgeType = badge?.count ? 'count' : 'dot'

  return (
    <div ref={ref} className={clsx(avatar.container)}>
      <img {...props} className={avatar.img({ size, variant })} />
      {props.badge && (
        <>
          <div
            className={avatar.notifications({
              horizontal: badge?.placement?.horizontal,
              vertical: badge?.placement?.vertical,
              type: badgeType,
              color: badge?.color,
              size,
            })}
          >
            <span>{props.badge?.count}</span>
            <span
              className={avatar.pulse({
                pulse: badge?.pulse,
                color: badge?.color,
                size,
              })}
            />
          </div>
        </>
      )}
    </div>
  )
})

Avatar.defaultProps = {
  size: 'md',
}

export default Avatar
