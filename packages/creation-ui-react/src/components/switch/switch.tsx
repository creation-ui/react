import { Switch as HSwitch } from '@headlessui/react'
import { useTheme } from '../../theme'
import clsx from 'clsx'
import { SwitchProps } from './switch.types'
import { label, text, input, shared, inputContainer } from '../../classes'
import { useId } from '../../hooks'
import { switchCircle, switchClasses } from './classes'
import { checkbox } from '../checkbox/classes'

const Switch = ({ checked, ...props }: SwitchProps) => {
  const { size: defaultSize } = useTheme()
  const { size = defaultSize, id, required, readOnly, error } = props
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
      <HSwitch
        id={componentId}
        aria-required={required}
        className={clsx(checkbox({ size }), switchClasses({ size, checked }))}
        {...props}
      >
        <span aria-hidden='true' className={switchCircle({ size, checked })} />
      </HSwitch>
    </div>
  )
}
Switch.displayName = '_Switch'

export default Switch
