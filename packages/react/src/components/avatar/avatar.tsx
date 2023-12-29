import { forwardRef, useMemo } from 'react'
import { Show, ShowFirstMatching } from '../show'
import type AvatarProps from './avatar.types'
import { avatar } from './classes'
import { AVATAR_CONTAINER_PROPS, AVATAR_SIZE_MAP } from './constants'
import { pick } from '../utils'

const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { variant = 'circle', children, className, ...rest } = props
  const { style } = useMemo(() => {
    const size =
      typeof props.size === 'number' ? props.size : AVATAR_SIZE_MAP[props.size]

    const containerStyle = pick(props.style, AVATAR_CONTAINER_PROPS)

    return {
      size,
      style: { width: size, height: size, ...containerStyle },
    }
  }, [props.size, props.style])

  return (
    <div
      ref={ref}
      className={avatar.img({ variant, container: true, className })}
      style={style}
    >
      <ShowFirstMatching>
        <Show when={!children}>
          <img {...rest} className={avatar.img({ variant })} />
        </Show>
        <Show when={!!children}>{children}</Show>
      </ShowFirstMatching>
    </div>
  )
})

Avatar.defaultProps = {
  size: 'md',
}

export default Avatar
