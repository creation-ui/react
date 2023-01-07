import { RadioGroup } from '@headlessui/react'
import { useTheme } from '../../theme'
import clsx from 'clsx'
import { ToggleGroupOption, ToggleGroupProps } from './toggle-group.types'
import { label, text, input, shared, inputContainer } from '../../classes'
import { toggleGroup } from './classes'

const ToggleGroup = (props: ToggleGroupProps) => {
  const { size: defaultSize } = useTheme()
  const {
    size = defaultSize,
    options,
    className,
    label: title,
    ...rest
  } = props
  const disabled = props.disabled || props.readOnly

  const containerClasses = clsx(inputContainer({ disabled }), text({ size }))

  return (
    <div className={containerClasses}>
      <span
        className={label({ size, required: props.required })}
        children={props.label}
        aria-label={props.label?.toString()}
      />
      <RadioGroup {...rest} className={clsx(toggleGroup.container, className)}>
        <div className={clsx(toggleGroup.list)}>
          {options.map(({ label, value, disabled }: ToggleGroupOption) => (
            <RadioGroup.Option
              key={value}
              value={value}
              disabled={disabled}
              className={({ checked, disabled }) =>
                toggleGroup.option({
                  checked,
                  disabled,
                  size,
                })
              }
            >
              <RadioGroup.Label as='span'>{label}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}

export default ToggleGroup
