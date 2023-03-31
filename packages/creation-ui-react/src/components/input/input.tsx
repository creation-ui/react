import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { input, inputContainer, inputIcon, label, text } from '../../classes'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import { Icon } from '../icon'
import { InteractiveContainer } from '../interactive-container'
import { Loader } from '../loader'
import { HelperText } from '../typography/helper-text'
import type { InputProps } from './input.types'

const Input = forwardRef<any, InputProps>((props, ref: ForwardedRef<any>) => {
  const { size: defaultSize } = useTheme()
  const {
    loading,
    helperText,
    error,
    size = defaultSize,
    type = 'text',
    className,
    id,
    startAdornment,
    endAdornment,
    variant,
    ...rest
  } = props
  const componentId = useId(id)

  const disabled = props.disabled
  const readOnly = props.readOnly || loading

  const containerClasses = twMerge(
    inputContainer({ disabled, error: !!error }),
    text({ size })
  )

  const isColor = type === 'color'

  const inputClasses = twMerge(
    input({
      size,
      variant,
      iconLeft: !!startAdornment,
      iconRight: !!endAdornment,
      className: twMerge(className),
      error: !!error,
      fillContent: isColor
    })
  )

  console.log('inputClasses', inputClasses)
  return (
    <InteractiveContainer disabled={disabled} className={className}>
      <div className={containerClasses}>
        <label
          htmlFor={componentId}
          className={label({ size, required: props.required })}
          children={props.label}
          aria-label={props.label?.toString()}
        />

        {props.readOnly && (
          <Icon
            icon='readonly'
            title='Read only'
            className={clsx('absolute', 'top-0', 'right-0')}
          />
        )}
        <div className='relative max-h-min'>
          {startAdornment && (
            <div className={inputIcon({ position: 'left' })}>
              {startAdornment}
            </div>
          )}
          <input
            ref={ref}
            id={componentId}
            className={inputClasses}
            aria-invalid={!!error}
            type={type}
            {...rest}
            aria-readonly={readOnly}
            readOnly={readOnly}
          />

          {!loading && endAdornment && (
            <div className={inputIcon({ position: 'right' })}>
              {endAdornment}
            </div>
          )}
          {loading && (
            <Loader
              className={inputIcon({ position: 'right' })}
              size={size === 'lg' ? 'md' : 'sm'}
            />
          )}
        </div>
        <HelperText
          size={size}
          helperText={error || helperText}
          error={Boolean(error)}
        />
      </div>
    </InteractiveContainer>
  )
})

Input.displayName = 'Input'

export default Input
