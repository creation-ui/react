import type { SelectOptionsType } from '../types'

export const formatOptionValue = (
  value: SelectOptionsType | string | null
): string =>
  value && typeof value === 'object' ? value.label : (value as string)
