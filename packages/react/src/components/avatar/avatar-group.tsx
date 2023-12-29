import clsx from 'clsx'
import {
  CSSProperties,
  Children,
  FC,
  cloneElement,
  isValidElement,
  useMemo,
} from 'react'
import { useTheme } from '../../theme'
import { Show } from '../show'
import Avatar from './avatar'
import AvatarProps, { AvatarGroupProps } from './avatar.types'
import { AVATAR_GROUP_OFFSET_MOD, AVATAR_SIZE_MAP } from './constants'

export const _renderAvatarGroupSurplus = (count: number) => (
  <span>+{count}</span>
)

export const AvatarGroup: FC<AvatarGroupProps> = ({
  total = 0,
  max,
  renderSurplus = _renderAvatarGroupSurplus,
  children,
  className,
  surplusClassName,
  offsetMultiplier = AVATAR_GROUP_OFFSET_MOD,
  ...rest
}) => {
  const theme = useTheme()

  const { surplusCount, size, offset } = useMemo(() => {
    const { size = theme.size } = rest
    const finalSize: number =
      typeof size === 'number' ? size : AVATAR_SIZE_MAP[size]
    const count = Children.count(children)
    const surplus = max ? count - max : total - count

    return {
      childrenCount: count,
      surplusCount: surplus,
      size: finalSize,
      offset: {
        marginLeft: finalSize * offsetMultiplier,
      } as CSSProperties,
    }
  }, [children, max, total, rest.size, theme.size])

  return (
    <div className={clsx('flex', className)}>
      {Children.map(children, (child, index) => {
        if (max && index >= max) return null
        if (isValidElement(child)) {
          return (
            <div style={offset}>
              {cloneElement<AvatarProps>(child, {
                size,
              })}
            </div>
          )
        }
        return null
      })}
      <Show when={surplusCount > 0}>
        <div style={offset}>
          <Avatar size={size} className={surplusClassName}>
            {renderSurplus?.(surplusCount)}
          </Avatar>
        </div>
      </Show>
    </div>
  )
}

AvatarGroup.defaultProps = {
  size: 'md',
}
