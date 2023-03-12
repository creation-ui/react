import { Switch as HSwitch } from '@headlessui/react'
import clsx from 'clsx'
import { inputContainer, label, text } from '../../classes'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import { checkbox } from '../checkbox/classes'
import { switchCircle, switchClasses } from './classes'
import type { SwitchProps } from './switch.types'
import { InteractiveContainer } from '../interactive-container'

const Switch = ({ checked, ...props }: SwitchProps) => {
  const { size: defaultSize } = useTheme()
  const {
    size = defaultSize,
    id,
    required,
    readOnly,
    error,
  } = props
  const componentId = useId(id)

  const disabled = props.disabled || readOnly

  const containerClasses = clsx(
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
          className={clsx(checkbox({ size }), switchClasses({ size, checked }))}
          {...props}
        >
          <span
            aria-hidden='true'
            className={switchCircle({ size, checked })}
          />
        </HSwitch>
      </div>
    </InteractiveContainer>
  )
}
Switch.displayName = '_Switch'

export default Switch
