import { DropdownOption } from '../types'

export const isSelected = (
  { id }: DropdownOption,
  selected: DropdownOption[]
) => {
  return selected.some(o => o.id === id)
}
