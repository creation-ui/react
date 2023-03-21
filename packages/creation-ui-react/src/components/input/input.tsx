import { ForwardedRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import {
  input,
  inputContainer,
  inputIcon,
  label,
  shared,
  text,
} from '../../classes'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import type { InputProps } from './input.types'
import { HelperText } from '../typography/helper-text'
import { InteractiveContainer } from '../interactive-container'
import { Loader } from '../loader'

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
    ...rest
  } = props
  const componentId = useId(id)

  const disabled = props.disabled || props.readOnly

  const containerClasses = twMerge(
    inputContainer({ disabled, error: !!error }),
    text({ size })
  )

  return (
    <InteractiveContainer disabled={disabled} className={className}>
      <div className={containerClasses}>
        <label
          htmlFor={componentId}
          className={label({ size, required: props.required })}
          children={props.label}
          aria-label={props.label?.toString()}
        />
        <Loader
          className={twMerge(shared.loaderInputPosition({ loading }))}
          size={size === 'lg' ? 'md' : 'sm'}
        />
        <div className='relative max-h-min'>
          {startAdornment && (
            <div className={inputIcon({ position: 'left' })}>
              {startAdornment}
            </div>
          )}
          <input
            ref={ref}
            id={componentId}
            className={input({
              size,
              variant: props.variant,
              iconLeft: !!startAdornment,
              iconRight: !!endAdornment,
              className: twMerge(className),
            })}
            aria-readonly={!!props.readOnly}
            aria-invalid={!!error}
            type={type}
            {...rest}
          />
          {endAdornment && (
            <div className={inputIcon({ position: 'right' })}>
              {endAdornment}
            </div>
          )}
        </div>
        <HelperText size={size} helperText={error || helperText} />
      </div>
    </InteractiveContainer>
  )
})

Input.displayName = 'Input'

export default Input
