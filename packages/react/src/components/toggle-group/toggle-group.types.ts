import type { GetComponentProps } from '@creation-ui/core'
import type { RadioGroupProps } from '../radio'
import type { RadioGroup } from '@headlessui/react'

export type HeadlessRadioGroupOptionProps = GetComponentProps<
  typeof RadioGroup.Option
>
export type HeadlessRadioGroupProps = GetComponentProps<typeof RadioGroup>

export type ToggleGroupValue = string
export type ToggleGroupOption = HeadlessRadioGroupOptionProps & {
  label: string | React.ReactNode
  value: ToggleGroupValue
  disabled?: boolean
}

export type ToggleGroupProps = Omit<
  RadioGroupProps,
  'disabled' | 'readonly' | 'label' | 'required'
> & {
  options: ToggleGroupOption[]
  label?: string
  required?: boolean
  value?: ToggleGroupValue
  onChange?: HeadlessRadioGroupProps['onChange']
}
