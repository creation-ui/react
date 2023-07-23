import { Chip } from '../../../components/chip'
import { useAutocomplete } from '../context'
import { AutocompleteOptionType } from '../types'

export const MultipleSelections = () => {
  const {
    limit = 0,
    selected = [],
    getOptionLabel,
    handleRemoveSelected,
    renderTags = (selected: AutocompleteOptionType[]) =>
      selected?.map(option => (
        <Chip
          option={option}
          getOptionLabel={getOptionLabel}
          handleRemoveSelected={handleRemoveSelected}
        />
      )),
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
