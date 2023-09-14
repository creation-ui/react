import { Chip } from '../../chip'
import { useAutocomplete } from '../context'
import { AutocompleteOptionDefault } from '../types'

export const MultipleSelections = () => {
  const {
    limit = 0,
    selected = [],
    defaultTagProps = { variant: 'outlined', status: 'info' },
    getOptionLabel,
    handleRemoveSelected,
    renderTags = (selected: AutocompleteOptionDefault[]) =>
      selected?.map(option => {
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
      }),
    getLimitTagsText,
  } = useAutocomplete()

  if (!Array.isArray(selected) || !selected.length) {
    return null
  }

  const limitedOptions = selected?.slice(0, limit)
  const more = selected?.length - limit
  return (
    <>
      {renderTags(limitedOptions)}
      {more > 0 && <span>{getLimitTagsText!(more)}</span>}
    </>
  )
}
