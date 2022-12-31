import type { GetComponentProps } from '@types'
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

export type ToggleGroupProps = RadioGroupProps & {
  options: ToggleGroupOption[]
  title?: string
  required?: boolean
  onChange?: HeadlessRadioGroupProps['onChange']
}
