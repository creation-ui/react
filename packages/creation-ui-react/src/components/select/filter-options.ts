import { DropdownOptionType } from '../../types'

export const filterOptionsDefault = (query: string) => (option: DropdownOptionType) =>
  option.label
    ?.toLowerCase()
    ?.replace(/\s+/g, '')
    ?.includes(query?.toLowerCase()?.replace(/\s+/g, ''))
