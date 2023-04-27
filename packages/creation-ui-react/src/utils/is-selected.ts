import { DropdownOption } from '../types'

export const isSelected = (
  value: DropdownOption | null,
  selected: null | DropdownOption | DropdownOption[]
) => {
  switch (Array.isArray(selected)) {
    case true:
      // @ts-expect-error
      return selected.some(o => o.id === value.id)
    case false:
      // @ts-expect-error
      return selected?.id === value.id
    default:
      return false
  }
}
