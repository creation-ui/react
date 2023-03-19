import React from 'react'
import { Loader, LoadingOverlay } from '..'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import type { ButtonProps } from './button.types'
import { button } from './classes'
import { InteractiveContainer } from '..'
import { text } from '../../classes'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, loading, iconLeft, iconRight, className, id, ...props },
    ref
  ) => {
    const componentId = useId(id)
    const theme = useTheme()

    const {
      circle,
      size = theme.size,
      variant = 'contained',
      status = 'primary',
      uppercase,
    } = props

    const isLoaderWhite = variant === 'contained'
    const disabled = loading || props.disabled

    const classes = button({
      size,
      status,
      circle,
      variant,
      disabled,
      uppercase,
      className: [theme.roundness, className, text({ size })],
    })

    const centerSpinner = loading && circle
    const leftSpinner = loading && !circle

    return (
      <InteractiveContainer disabled={disabled} className={className}>
        <button
          id={componentId}
          ref={ref}
          disabled={disabled}
          {...props}
          className={classes}
        >
          <LoadingOverlay active={centerSpinner} white={isLoaderWhite} />
          <>
            {leftSpinner ? (
              <Loader size={'sm'} white={isLoaderWhite} />
            ) : (
              iconLeft
            )}
          </>
          <span>{children}</span>
          <>{iconRight}</>
        </button>
      </InteractiveContainer>
    )
  }
)

Button.displayName = 'Button'

export default Button
