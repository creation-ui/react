import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import { Loader, ErrorText } from '../'
import { InputProps } from './input.types'

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref: ForwardedRef<HTMLInputElement>) => {
    const { size: defaultSize } = useTheme()
    const {
      loading,
      helperText,
      error,
      label,
      size = defaultSize,
      type = 'text',
      className,
      id,
      ...rest
    } = props
    const componentId = useId(id)

    return (
      <div
        className={clsx(
          //
          'form-element',
          'form-element--wrapper',
          `text-size--${size}`
        )}
      >
        <label
          htmlFor={componentId}
          className={clsx(
            'form-element--label',
            props.required && 'form-element--required'
          )}
        >
          {label}
        </label>
        <input
          ref={ref}
          id={componentId}
          className={clsx(
            'form-element--input',
            `form-element--input--${size}`,
            'peer',
            className
          )}
          type={type}
          {...rest}
        />
        {loading && <Loader className='form-element--loader' />}
        <ErrorText error={error} />
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
