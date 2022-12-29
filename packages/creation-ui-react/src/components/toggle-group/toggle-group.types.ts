import { GetComponentProps } from '@creation-ui/core'
import { RadioGroup } from '@headlessui/react'

export type ToggleGroupValue = string

export type ToggleGroupOption = RadioGroupOptionProps & {
  label: string | React.ReactNode
  value: ToggleGroupValue
  disabled?: boolean
}

export type RadioGroupProps = GetComponentProps<typeof RadioGroup>
export type RadioGroupOptionProps = GetComponentProps<typeof RadioGroup.Option>

export type ToggleGroupProps = RadioGroupProps & {
  options: ToggleGroupOption[]
  title?: string
  required?: boolean
}
