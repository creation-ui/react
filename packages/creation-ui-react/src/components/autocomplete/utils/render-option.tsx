import { useAutocomplete } from '../context'
import { AutocompleteOptionType, AutocompleteProps } from '../types'
import Highlighter from "react-highlight-words";

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
  const label = getOptionLabel(option)

  return (
    <li {...props}>
      <Highlighter
        searchWords={[props.query]}
        autoEscape={true}
        textToHighlight={label}
      />
    </li>
  )
}