import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import { Loader, ErrorText } from '../'
import type { InputProps } from './input.types'
import { label, text, input, shared, inputContainer } from '../../classes'

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref: ForwardedRef<HTMLInputElement>) => {
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
      <div className={containerClasses}>
        <label
          htmlFor={componentId}
          className={label({ size, required: props.required })}
          children={props.label}
          aria-label={props.label?.toString()}
        />
        <input
          ref={ref}
          id={componentId}
          className={input({ size, variant: props.variant, className })}
          type={type}
          aria-readonly={!!props.readOnly}
          {...rest}
        />
        {loading && <Loader className={clsx(shared.loaderInputPosition)} />}
        <ErrorText error={error} />
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
