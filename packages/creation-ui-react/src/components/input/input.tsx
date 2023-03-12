import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import { ErrorText, InteractiveContainer, Loader } from '..'
import { input, inputContainer, label, shared, text } from '../../classes'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
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
    ...rest
  } = props
  const componentId = useId(id)

  const disabled = props.disabled || props.readOnly

  const containerClasses = clsx(
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
          className={clsx(shared.loaderInputPosition({ loading }))}
          size={size === 'lg' ? 'md' : 'sm'}
        />
        <input
          ref={ref}
          id={componentId}
          className={input({ size, variant: props.variant, className })}
          aria-readonly={!!props.readOnly}
          aria-invalid={!!error}
          type={type}
          {...rest}
        />
        <ErrorText error={error} />
      </div>
    </InteractiveContainer>
  )
})

Input.displayName = 'Input'

export default Input
