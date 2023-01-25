import { ErrorText, Loader } from '..'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import type { TextAreaProps } from './textarea.types'
import { label, text, input, shared, inputContainer } from '../../classes'

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
        {loading && <Loader className='form-element--loader' />}
        <ErrorText error={error} />
      </div>
    )
  }
)

TextArea.displayName = 'Input'

export default TextArea
