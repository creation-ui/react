import clsx from 'clsx'
import { inputContainer, label, text } from '../../classes'
import { useTheme } from '../../theme'
import { InteractiveContainer } from '../interactive-container'
import { HelperText } from '../typography/helper-text'
import type { RadioGroupProps } from './types'

const RadioGroupComponent = ({ children, ...props }: RadioGroupProps) => {
  const { size: defaultSize } = useTheme()
  const { error, size = defaultSize, helperText } = props

  const disabled = props.disabled || props.readOnly

  const containerClasses = clsx(
    inputContainer({ disabled, error: !!error }),
    text({ size })
  )

  return (
    <InteractiveContainer disabled={disabled} className={props.className}>
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
        <HelperText
          size={size}
          helperText={error || helperText}
          error={Boolean(error)}
        />
      </div>
    </InteractiveContainer>
  )
}

export default RadioGroupComponent
