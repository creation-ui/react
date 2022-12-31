import { RadioGroup } from '@headlessui/react'
import { useTheme } from '../../theme'
import clsx from 'clsx'
import { ToggleGroupOption, ToggleGroupProps } from './toggle-group.types'

const ToggleGroup = (props: ToggleGroupProps) => {
  const { size: defaultSize } = useTheme()
  const { size = defaultSize, options, className, title, ...rest } = props

  return (
    <div
      className={clsx('form-element--wrapper', `text-size--${size}`, className)}
    >
      <span
        className={clsx(
          'form-element--label',
          `form-element--label-${size}`,
          props.required && 'form-element--required'
        )}
      >
        {title}
      </span>
      <RadioGroup {...rest} className={clsx('toggle-group--group', className)}>
        <div className={'toggle-group--options'}>
          {options.map(({ label, value, disabled }: ToggleGroupOption) => (
            <RadioGroup.Option
              key={value}
              value={value}
              disabled={disabled}
              className={({ checked, disabled }) =>
                clsx(
                  'toggle-group--option',
                  //active: not used
                  checked && 'toggle-group--option_checked',
                  disabled && 'toggle-group--option_disabled'
                )
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
