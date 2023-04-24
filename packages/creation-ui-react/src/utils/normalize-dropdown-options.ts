import { DropdownOption, DropdownValueType } from '../types'

export const normalizeOptions = (
  options: string[] | DropdownOption[]
): DropdownOption[] => {
  if (Array.isArray(options) && typeof options[0] === 'string') {
    return (options as string[]).map((option: string) => ({
      id: option,
      label: option,
    }))
  }

  return options as DropdownOption[]
}
export const normalizeValue = (
  value: DropdownValueType
): DropdownOption | DropdownOption[] | null => {
  // empty
  if (!value) return null

  // multiple string[]
  if (Array.isArray(value) && typeof value[0] === 'string') {
    return (value as string[]).map((option: string) => ({
      id: option,
      label: option,
    }))
  }
  // single string
  if (typeof value === 'string') {
    return {
      id: value,
      label: value,
    }
  }

  // multiple or single DropdownOption
  return value as DropdownOption | DropdownOption[]
}

export const getFlatOptions = (
  options: DropdownOption[] | DropdownOption
): string[] | string => {
  if (Array.isArray(options)) {
    return options.map((option: DropdownOption) => option.label)
  } else {
    return (options as DropdownOption).label
  }
}
