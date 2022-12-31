import { ErrorText, Loader } from '../'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import { TextAreaProps } from './textarea.types'

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const { size: defaultSize } = useTheme()
    const { error, label, size = defaultSize, className, id, loading } = props
    const componentId = useId(id)

    return (
      <div className={clsx(`text-size--${size}`, 'form-element--wrapper')}>
        <label
          htmlFor={componentId}
          className={clsx(
            'form-element--label',
            props.required && 'form-element--required'
          )}
        >
          {label}
        </label>
        <div className='mt-1'>
          <textarea
            ref={ref}
            id={componentId}
            className={clsx('peer', 'resize', 'form-element--input', className)}
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
