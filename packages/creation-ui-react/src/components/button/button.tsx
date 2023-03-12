import React from 'react'
import { Loader } from '..'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import type { ButtonProps } from './button.types'
import { button } from './classes'
import { InteractiveContainer } from '..'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, loading, iconLeft, iconRight, className, id, ...props },
    ref
  ) => {
    const componentId = useId(id)
    const theme = useTheme()

    // get the default values from theme
    const {
      circle,
      size = theme.size,
      variant = 'contained',
      color = 'primary',
    } = props

    const isLoaderWhite = variant === 'contained'
    const disabled = loading || props.disabled

    return (
      <InteractiveContainer disabled={disabled} className={className}>
        <button
          id={componentId}
          ref={ref}
          disabled={disabled}
          {...props}
          className={button({
            size,
            color,
            circle,
            variant,
            disabled,
            className: [theme.roundness, className],
          })}
        >
          <>{loading ? <Loader size={size} white={isLoaderWhite} /> : null}</>
          <>{iconLeft}</>
          <span>{children}</span>
          <>{iconRight}</>
        </button>
      </InteractiveContainer>
    )
  }
)

Button.displayName = 'Button'

export default Button
