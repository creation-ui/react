import { FC } from 'react'
import { AutocompleteOptionType } from '../autocomplete/types'
import { ClearButton } from '../clear-button'
import { chipClasses } from './classes'

interface ChipProps {
  className?: string
  option: AutocompleteOptionType
  handleRemoveSelected: (option: AutocompleteOptionType) => void
  getOptionLabel: (option: AutocompleteOptionType) => string
}

// TODO: refactor to decouple from autocomplete
export const Chip: FC<ChipProps> = ({
  option,
  className,
  getOptionLabel,
  handleRemoveSelected,
}) => {
  const handleRemove = e => {
    e?.stopPropagation?.()
    handleRemoveSelected(option)
  }

  return (
    <div className={chipClasses({ className })}>
      {getOptionLabel(option)}
      <ClearButton onClick={handleRemove} />
    </div>
  )
}
