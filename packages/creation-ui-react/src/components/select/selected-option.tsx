import { selectedOptionClasses } from '../../classes'
import { SelectedOptionProps } from '../../types'
import { ClearButton } from '../clear-button'
import { useSelect } from './context'

export const SelectedOption = ({ option, children }: SelectedOptionProps) => {
  const { handleRemoveSelected } = useSelect()

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
