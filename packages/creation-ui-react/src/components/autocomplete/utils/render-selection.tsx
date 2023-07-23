import { useAutocomplete } from '../context'
import { AutocompleteOptionType } from '../types'

export const _renderSelection = (option: AutocompleteOptionType) => {
  const { getOptionLabel } = useAutocomplete()
  return option ? <span>{getOptionLabel(option)}</span> : null
}
