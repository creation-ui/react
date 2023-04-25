import { DropdownOption } from '../types'

export const isSelected = (
  { id }: DropdownOption,
  selected: DropdownOption | DropdownOption[]
) => {
  if (!Array.isArray(selected)) return true
  return selected.some(o => o.id === id)
}
