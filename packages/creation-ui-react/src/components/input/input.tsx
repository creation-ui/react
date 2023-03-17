import { ForwardedRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { ErrorText, InteractiveContainer, Loader } from '..'
import {
  helperTextClasses,
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
import { HelperText } from '../helper-text'

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
    iconLeft,
    iconRight,
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
        <HelperText size={size} helperText={helperText} />
        <div className='relative max-h-min'>
          {iconLeft && (
            <div className={inputIcon({ position: 'left' })}>{iconLeft}</div>
          )}
          <input
            ref={ref}
            id={componentId}
            className={input({
              size,
              variant: props.variant,
              iconLeft: !!iconLeft,
              iconRight: !!iconRight,
              className: twMerge(className),
            })}
            aria-readonly={!!props.readOnly}
            aria-invalid={!!error}
            type={type}
            {...rest}
          />
          {iconRight && (
            <div className={inputIcon({ position: 'right' })}>{iconRight}</div>
          )}
        </div>
        <ErrorText error={error} />
      </div>
    </InteractiveContainer>
  )
})

Input.displayName = 'Input'

export default Input
