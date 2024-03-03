import { useAutocomplete } from '../context'

export const MultipleSelections = () => {
  const {
    limit = 0,
    selected = [],
    renderTags,
    getLimitTagsText,
  } = useAutocomplete()

  if (!Array.isArray(selected) || !selected.length) {
    return null
  }

  const limitedOptions = selected?.slice(0, limit)
  const more = selected?.length - limit
  return (
    <>
      {renderTags?.(limitedOptions)}
      {more > 0 && <span>{getLimitTagsText!(more)}</span>}
    </>
  )
}
