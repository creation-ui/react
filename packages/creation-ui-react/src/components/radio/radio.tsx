import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import { errorClasses, inputContainer, label, text } from '../../classes'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import { InteractiveContainer } from '../interactive-container'
import { Description } from '../typography'
import { radio } from './classes'
import type { RadioProps } from './types'

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
      <InteractiveContainer disabled={disabled} className={className}>
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
            className={label({
              size,
              required: props.required,
              for: 'checkbox',
            })}
            children={props.label}
            aria-label={props.label?.toString()}
          />
          <Description
            size={size}
            error={!!error}
            className={error ? errorClasses.text : ''}
          >
            {error || helperText}
          </Description>
        </div>
      </InteractiveContainer>
    )
  }
)

Radio.displayName = 'Radio'

export default Radio
