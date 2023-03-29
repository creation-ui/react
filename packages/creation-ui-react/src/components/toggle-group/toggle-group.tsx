import { RadioGroup } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'
import { useTheme } from '../../theme'
import { getElementPosition } from '../../utils/get-element-position'
import { toggleGroup } from './classes'
import type { ToggleGroupOption, ToggleGroupProps } from './toggle-group.types'

export const ToggleGroup = (props: ToggleGroupProps) => {
  const { size: defaultSize } = useTheme()
  const { size = defaultSize, options, className, ...rest } = props

  return (
    <RadioGroup {...rest} className={twMerge(toggleGroup.container, className)}>
      {options.map(
        ({ label, value, disabled }: ToggleGroupOption, index, array) => (
          <RadioGroup.Option
            key={value}
            value={value}
            title={value}
            disabled={disabled}
            className={({ checked, disabled }) =>
              toggleGroup.button({
                checked,
                disabled,
                size,
                element: getElementPosition(array, index),
              })
            }
          >
            <RadioGroup.Label as='span'>{label}</RadioGroup.Label>
          </RadioGroup.Option>
        )
      )}
    </RadioGroup>
  )
}
