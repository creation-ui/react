import { selectedOptionClasses } from '../../../classes'
import { SelectedOptionProps } from '../../../types'
import { ClearButton } from '../../clear-button'
import { useDropdown } from './context'

export const SelectedOption = ({ option, children }: SelectedOptionProps) => {
  const { handleRemoveSelected } = useDropdown()

  const handleRemove = e => {
    e?.stopPropagation?.()
    handleRemoveSelected(option)
  }

  return (
    <span className={selectedOptionClasses()}>
      {children ? children : option.label}
      <ClearButton onClick={handleRemove} />
    </span>
  )
}
