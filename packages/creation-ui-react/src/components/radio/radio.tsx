import { ErrorText } from '../'
import { useTheme } from '../../theme'
import { useId } from '../../hooks'
import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import { RadioProps } from './types'

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (props, ref: ForwardedRef<HTMLInputElement>) => {
    const { size: defaultSize } = useTheme()
    const {
      helperText,
      error,
      label,
      size = defaultSize,
      className,
      id,
      ...rest
    } = props
    const componentId = useId(id)

    return (
      <div className={clsx(`text-size--${size}`, 'form-element--wrapper-row')}>
        <input
          ref={ref}
          className={clsx(
            'peer',
            'form-element--radio',
            `form-element--radio--${size}`,
            className
          )}
          type='radio'
          name={componentId}
          id={componentId}
          {...rest}
        />
        <label
          htmlFor={componentId}
          className={clsx(
            'form-element--label',
            'form-element--label--checkbox'
          )}
        >
          {label}
        </label>
        <ErrorText error={error} />
      </div>
    )
  }
)

Radio.displayName = 'Radio'

export default Radio
