import type { SelectOptionsType } from '../types'

export const formatOptionValue = (value: SelectOptionsType | string | null) =>
  value && typeof value === 'object' ? value.value : value
