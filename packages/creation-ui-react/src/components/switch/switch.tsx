import { Switch as HSwitch } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'
import { errorClasses, inputContainer, label, text } from '../../classes'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import { InteractiveContainer } from '../interactive-container'
import { Description } from '../typography'
import { switchCircle, switchClasses } from './classes'
import type { SwitchProps } from './switch.types'

const Switch = ({ checked, ...props }: SwitchProps) => {
  const { size: defaultSize } = useTheme()
  const {
    //
    size = defaultSize,
    id,
    required,
    loading,
    error,
    helperText,
    ...rest
  } = props
  const componentId = useId(id)

  const disabled = props.disabled
  const readOnly = props.readOnly || loading

  const containerClasses = twMerge(
    inputContainer({ disabled, error: !!error, layout: 'row' }),
    text({ size })
  )

  return (
    <InteractiveContainer disabled={disabled} className={props.className}>
      <div className={containerClasses}>
        <HSwitch
          {...rest}
          id={componentId}
          aria-required={required}
          className={switchClasses({ size, checked, readOnly })}
        >
          <span
            aria-hidden='true'
            className={switchCircle({ size, checked })}
          />
        </HSwitch>
        <label
          htmlFor={componentId}
          className={label({ size, required: props.required, for: 'checkbox' })}
          children={props.label}
          aria-label={props.label?.toString()}
        />
      </div>
      <Description
        size={size}
        error={!!error}
        className={error ? errorClasses.text : ''}
      >
        {error || helperText}
      </Description>
    </InteractiveContainer>
  )
}
Switch.displayName = '_Switch'

export default Switch
