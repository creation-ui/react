import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { ToggleGroupOption, ToggleGroupProps } from './toggle-group.types'
import { useTheme } from '../../theme'
import { input, inputContainer, label, text } from '../../classes'
import { InteractiveContainer } from '../interactive-container'
import { toggleGroup } from './classes'

export const ToggleGroup = (props: ToggleGroupProps) => {
  const { size: defaultSize } = useTheme()
  const {
    size = defaultSize,
    options,
    className,
    label: title,
    ...rest
  } = props
  const disabled = props.disabled || props.readOnly

  const containerClasses = clsx(
    inputContainer({ disabled, className: [text({ size })] })
  )

  const inputClasses = twMerge(
    input({
      // variant,
      size,
      className: clsx(toggleGroup.container, className),
    })
  )

  return (
    <InteractiveContainer disabled={disabled} className={className}>
      <div className={containerClasses}>
        <span
          className={label({ size, required: props.required })}
          children={props.label}
          aria-label={props.label?.toString()}
        />
        <RadioGroup {...rest} className={inputClasses}>
          <div className={clsx(toggleGroup.list)}>
            {options.map(({ label, value, disabled }: ToggleGroupOption) => (
              <RadioGroup.Option
                key={value}
                value={value}
                title={value}
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
    </InteractiveContainer>
  )
}
