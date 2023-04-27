import { selectedOptionClasses } from '../../../classes'
import { SelectedOptionProps } from '../../../types'
import { ClearButton } from '../../clear-button'
import { useDropdown } from './context'

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
