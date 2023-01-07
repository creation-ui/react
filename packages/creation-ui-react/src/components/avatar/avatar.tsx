import clsx from 'clsx'
import { forwardRef } from 'react'
import AvatarProps from './avatar.types'
import { avatar } from './classes'

const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { size, variant, badge } = props

  return (
    <div ref={ref} className={clsx(avatar.container)}>
      <img {...props} className={avatar.img({ size, variant })} />
      {props.badge && (
        <>
          <div
            className={avatar.notifications({
              horizontal: badge?.placement?.horizontal,
              vertical: badge?.placement?.vertical,
              type: badge?.type,
            })}
          >
            <span>{props.badge?.count}</span>
            <span className={avatar.pulse({ pulse: badge?.pulse })} />
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
