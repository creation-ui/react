import { Switch as HSwitch } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'
import { inputContainer, label, text } from '../../classes'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import { InteractiveContainer } from '../interactive-container'
import { HelperText } from '../typography'
import { switchCircle, switchClasses } from './classes'
import type { SwitchProps } from './switch.types'

const Switch = ({ checked, ...props }: SwitchProps) => {
  const { size: defaultSize } = useTheme()
  const {
    //
    size = defaultSize,
    id,
    required,
    readOnly,
    error,
    helperText,
  } = props
  const componentId = useId(id)

  const disabled = props.disabled || readOnly

  const containerClasses = twMerge(
    inputContainer({ disabled, error: !!error }),
    text({ size })
  )

  return (
    <InteractiveContainer disabled={disabled} className={props.className}>
      <div className={containerClasses}>
        <label
          htmlFor={componentId}
          className={label({ size, required: props.required })}
          children={props.label}
          aria-label={props.label?.toString()}
        />
        <HSwitch
          id={componentId}
          aria-required={required}
          className={switchClasses({ size, checked })}
          {...props}
        >
          <span
            aria-hidden='true'
            className={switchCircle({ size, checked })}
          />
        </HSwitch>
        <HelperText
          size={size}
          helperText={error || helperText}
          error={Boolean(error)}
        />
      </div>
    </InteractiveContainer>
  )
}
Switch.displayName = '_Switch'

export default Switch
