import { ErrorText } from '../'
import { useTheme } from '../../theme'
import { useId } from '../../hooks'
import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import type { RadioProps } from './types'
import { label, text, input, shared, inputContainer } from '../../classes'
import { radio } from './classes'

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (props, ref: ForwardedRef<HTMLInputElement>) => {
    const { size: defaultSize } = useTheme()
    const {
      helperText,
      error,
      size = defaultSize,
      className,
      id,
      ...rest
    } = props
    const componentId = useId(id)

    const disabled = props.disabled || props.readOnly

    const containerClasses = clsx(
      inputContainer({ disabled, error: !!error, layout: 'row' }),
      text({ size })
    )

    return (
      <div className={containerClasses}>
        <input
          ref={ref}
          className={radio({ size, className })}
          type='radio'
          name={componentId}
          id={componentId}
          disabled={disabled}
          {...rest}
        />
        <label
          htmlFor={componentId}
          className={label({ size, required: props.required, for: 'checkbox' })}
          children={props.label}
          aria-label={props.label?.toString()}
        />
        <ErrorText error={error} />
      </div>
    )
  }
)

Radio.displayName = 'Radio'

export default Radio
