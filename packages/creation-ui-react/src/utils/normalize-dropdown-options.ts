import { DropdownOption, DropdownValueType } from '../types'

export const normalizeOptions = (
  options: string[] | DropdownOption[] | null
): DropdownOption[] => {
  switch (Array.isArray(options) && typeof options[0] === 'string') {
    case true:
      return (options as string[]).map((option: string) => ({
        id: option,
        label: option,
      }))
    default:
      return (options as DropdownOption[]) ?? []
  }
}

export const normalizeValue = (
  value?: DropdownValueType | null
): DropdownOption | DropdownOption[] | null => {
  if (!value) return null

  switch (true) {
    case Array.isArray(value) && typeof value[0] === 'string':
      return (value as string[]).map((option: string) => ({
        id: option,
        label: option,
      }))
    case typeof value === 'string':
      return {
        id: value as string,
        label: value as string,
      }
    default:
      return value as DropdownOption | DropdownOption[]
  }
}

export const getFlatOptions = (
  options: DropdownOption[] | DropdownOption | null
): string[] => {
  switch (Array.isArray(options)) {
    case true:
      // @ts-expect-error
      return options.map((option: DropdownOption) => option.label)
    case false:
      return [(options as DropdownOption).label]
    default:
      return []
  }
}
