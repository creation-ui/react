import clsx from 'clsx'
import { forwardRef } from 'react'
import AvatarProps from './avatar.types'

const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  return (
    <div ref={ref} className={'avatar--wrapper'}>
      <img
        {...props}
        className={clsx(
          'avatar--img',
          `avatar--img-${props.size}`,
          `avatar--img-${props.variant}`
        )}
      />
      {props.badge && (
        <>
          <div
            className={clsx(
              'avatar--notifications',
              `avatar--notifications-${props.badge?.placement?.horizontal}`,
              `avatar--notifications-${props.badge?.placement?.vertical}`,
              `avatar--notifications-${props.badge?.type}`
            )}
          >
            <span>{props.badge?.count}</span>
            {props.badge.pulse && (
              <span
                className={clsx(
                  'avatar--pulse',
                  `avatar--pulse-${props.badge?.type}`
                )}
              />
            )}
          </div>
        </>
      )}
    </div>
  )
})

Avatar.defaultProps = {
  size: 'md',
  variant: 'circle',
}

export default Avatar
