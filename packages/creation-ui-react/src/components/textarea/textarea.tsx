import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { input, inputContainer, label, text } from '../../classes'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import { InteractiveContainer } from '../interactive-container'
import { Loader } from '../loader'
import { HelperText } from '../typography/helper-text'
import type { TextAreaProps } from './textarea.types'

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const { size: defaultSize } = useTheme()
    const {
      error,
      size = defaultSize,
      className,
      id,
      loading,
      helperText,
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
          <div className='mt-1'>
            <textarea
              ref={ref}
              id={componentId}
              className={input({
                size,
                variant: props.variant,
                className: twMerge(['resize', className]),
              })}
              aria-readonly={!!props.readOnly}
              {...rest}
            />
          </div>
          {loading && <Loader />}
          <HelperText
            size={size}
            helperText={error || helperText}
            error={Boolean(error)}
          />
        </div>
      </InteractiveContainer>
    )
  }
)

TextArea.displayName = 'TextArea'

export default TextArea
