import { useTheme } from '@theme'
import clsx from 'clsx'
import { ErrorText } from '@components'
import { RadioGroupProps } from './types'

const RadioGroupComponent = ({ children, ...props }: RadioGroupProps) => {
  const { size: defaultSize } = useTheme()
  const { error, label, size = defaultSize } = props

  return (
    <div
      aria-disabled={props.disabled}
      aria-readonly={props.readOnly}
      className={clsx(
        'form-element--wrapper',
        props.disabled && 'form-element--disabled',
        props.readOnly && 'form-element--read-only',
        `text-size--${size}`
      )}
    >
      <span
        className={clsx(
          props.required && 'form-element--required ',
          'form-element--label',
          `form-element--label-${size}`
        )}
      >
        {label}
      </span>
      <div className={'flex flex-col gap-2'}>{children}</div>
      <ErrorText error={error} />
    </div>
  )
}

export default RadioGroupComponent
