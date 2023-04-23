import type { DropdownOption } from '../types'

export const formatOptionValue = (
  value: DropdownOption | string | null
): string =>
  value && typeof value === 'object' ? value.label : (value as string)
