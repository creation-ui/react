import { selectedOptionClasses } from '../../../classes'
import { DropdownOption } from '../../../types'
import { ClearButton } from '../../clear-button'
import { useDropdown } from './context'

interface SelectedOptionProps {
  option: DropdownOption
  idx: number
}

export const SelectedOption = ({ option }: SelectedOptionProps) => {
  const { handleRemoveSelected } = useDropdown()

  const handleRemove = e => {
    e?.stopPropagation?.()
    handleRemoveSelected(option)
  }

  return (
    <span className={selectedOptionClasses()}>
      {option.label}
      <ClearButton onClick={handleRemove} />
    </span>
  )
}

export type SelectedOptionType = typeof SelectedOption
