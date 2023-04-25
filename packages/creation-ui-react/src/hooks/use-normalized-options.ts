import { DropdownOption, DropdownValueType } from '../types'
import {
  normalizeOptions,
  normalizeValue,
} from '../utils/normalize-dropdown-options'

interface UseNormalizedOptions {
  isDataFlat: boolean
  options: DropdownOption[]
  value: DropdownOption | DropdownOption[]
}

interface UseNormalizedOptionsArgs {
  options: string[] | DropdownOption[]
  value: DropdownValueType
}

export function useNormalizedOptions(
  props: UseNormalizedOptionsArgs
): UseNormalizedOptions {
  const isDataFlat = typeof props.options?.[0] === 'string'
  const options = normalizeOptions(props.options)
  const value = normalizeValue(props.value)

  return { isDataFlat, options, value }
}
