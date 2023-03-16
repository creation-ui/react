import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import { ErrorText, InteractiveContainer, Loader } from '..'
import { input, inputContainer, label, text } from '../../classes'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import type { TextAreaProps } from './textarea.types'

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const { size: defaultSize } = useTheme()
    const { error, size = defaultSize, className, id, loading } = props
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
                className: ['resize', className],
              })}
              aria-readonly={!!props.readOnly}
              {...props}
            />
          </div>
          {loading && <Loader />}
          <ErrorText error={error} />
        </div>
      </InteractiveContainer>
    )
  }
)

TextArea.displayName = 'Input'

export default TextArea
