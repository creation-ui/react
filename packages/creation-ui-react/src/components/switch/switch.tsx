import { Switch as HSwitch } from '@headlessui/react'
import { useTheme } from '@theme'
import clsx from 'clsx'
import { SwitchProps } from './switch.types'

const Switch = ({ checked, ...props }: SwitchProps) => {
  const { size: defaultSize } = useTheme()
  const { size = defaultSize, required, readOnly } = props

  return (
    <div
      className={clsx(
        'form-element--wrapper',
        `text-size--${size}`,
        readOnly && 'form-element--read-only'
      )}
    >
      <span
        className={clsx(
          'form-element--label',
          `form-element--label-${size}`,
          required && 'form-element--required'
        )}
      >
        {props.label}
      </span>
      <HSwitch
        aria-required={required}
        className={clsx(
          'peer',
          'form-element',
          'form-element--input--checkbox ',
          'switch',
          `switch--${size}`,
          checked && 'switch-checked',
          readOnly && 'form-element--read-only'
        )}
        {...props}
      >
        <span
          aria-hidden='true'
          className={clsx(
            'switch--circle',
            `switch--circle--${size}`,
            checked && `switch-checked--${size}`
          )}
        />
      </HSwitch>
    </div>
  )
}
Switch.displayName = '_Switch'

export default Switch
