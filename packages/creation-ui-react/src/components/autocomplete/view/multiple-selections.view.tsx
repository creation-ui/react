import { Chip } from '../../chip'
import { useAutocomplete } from '../context'
import { AutocompleteOptionType } from '../types'

export const MultipleSelections = () => {
  const {
    limit = 0,
    selected = [],
    defaultTagVariant = 'outlined',
    defaultTagStatus = 'info',
    getOptionLabel,
    handleRemoveSelected,
    renderTags = (selected: AutocompleteOptionType[]) =>
      selected?.map(option => {
        const label = getOptionLabel(option)
        const onDelete = () => handleRemoveSelected(option)
        return (
          <Chip
            key={label}
            label={label}
            onDelete={onDelete}
            variant={defaultTagVariant}
            status={defaultTagStatus}
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
      {more > 0 && <span>{getLimitTagsText(more)}</span>}
    </>
  )
}
