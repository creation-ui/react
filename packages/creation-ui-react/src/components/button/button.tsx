import { Loader, useId, useTheme } from '@creation-ui/core'
import clsx from 'clsx'
import React from 'react'
import { ButtonProps } from './button.types'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, loading, iconLeft, iconRight, className, id, ...props },
    ref
  ) => {
    const componentId = useId(id)
    const theme = useTheme()

    // get the default values from theme
    const {
      rounded = theme.roundness,
      size = theme.size,
      variant = 'contained',
      color = 'primary',
    } = props

    const isContained = variant === 'contained'

    return (
      <button
        id={componentId}
        ref={ref}
        disabled={loading}
        {...props}
        className={clsx(
          'button',
          'button-base',
          `button-variant--${variant}--${color}`,
          rounded === 'circle'
            ? `button-circle--${size} rounded-full`
            : `button-size--${size}`,
          className
        )}
      >
        <>{loading ? <Loader size={size} white={isContained} /> : null}</>
        <>{iconLeft}</>
        <span>{children}</span>
        <>{iconRight}</>
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
