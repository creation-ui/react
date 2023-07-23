import { useAutocomplete } from '../context'
import { AutocompleteOptionType, AutocompleteProps } from '../types'

export const renderOptionInternalContainer = (
  option: AutocompleteOptionType,
  index: number
) => {
  const { renderOption, getOptionProps } = useAutocomplete()
  const props = getOptionProps(option, index)
  return renderOption(props, option)
}

export const _renderOption: AutocompleteProps['renderOption'] = (
  props,
  option
) => {
  const { getOptionLabel } = useAutocomplete()
  return <li {...props}>{getOptionLabel(option)} </li>
}
