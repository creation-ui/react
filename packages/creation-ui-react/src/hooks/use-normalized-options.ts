import { DropdownOptionType, DropdownValueType } from '../types'
import {
  normalizeOptions,
  normalizeValue,
} from '../utils/normalize-dropdown-options'

interface UseNormalizedOptions {
  isDataFlat: boolean
  options: DropdownOptionType[]
  value: null | DropdownOptionType | DropdownOptionType[]
}

interface UseNormalizedOptionsArgs {
  options: string[] | DropdownOptionType[]
  value?: DropdownValueType
}

export function useNormalizedOptions(
  props: UseNormalizedOptionsArgs
): UseNormalizedOptions {
  const isDataFlat = typeof props.options?.[0] === 'string'
  const options = normalizeOptions(props.options)
  const value = normalizeValue(props.value)

  return { isDataFlat, options, value }
}
