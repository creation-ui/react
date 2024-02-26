import { Chip } from '../../chip'
import { useAutocomplete } from '../context'
import { AutocompleteOptionDefault } from '../types'

export const _renderTags = (selected: AutocompleteOptionDefault[] = []) => {
  const { getOptionLabel, handleRemoveSelected, defaultTagProps } =
    useAutocomplete()

  return selected?.map(option => {
    const label = getOptionLabel!(option)
    const onDelete = () => handleRemoveSelected(option)
    return (
      <Chip
        {...defaultTagProps}
        key={label}
        label={label}
        onDelete={onDelete}
      />
    )
  })
}
