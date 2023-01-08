import clsx from 'clsx'
import { ErrorText } from '../'
import { inputContainer, label, text } from '../../classes'
import { useTheme } from '../../theme'
import type { RadioGroupProps } from './types'

const RadioGroupComponent = ({ children, ...props }: RadioGroupProps) => {
  const { size: defaultSize } = useTheme()
  const { error, size = defaultSize } = props

  const disabled = props.disabled || props.readOnly

  const containerClasses = clsx(
    inputContainer({ disabled, error: !!error }),
    text({ size })
  )

  return (
    <div
      aria-disabled={props.disabled}
      aria-readonly={props.readOnly}
      className={containerClasses}
    >
      <span
        className={label({ size, required: props.required })}
        children={props.label}
        aria-label={props.label?.toString()}
      />
      <div className={'flex flex-col gap-2'}>{children}</div>
      <ErrorText error={error} />
    </div>
  )
}

export default RadioGroupComponent
