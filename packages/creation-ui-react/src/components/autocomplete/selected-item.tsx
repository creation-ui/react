import { SelectOptionsType } from '../../types'
import { ClearButton } from '../clear-button'
import { selectedOptionClasses } from './classes'
import { useAutocomplete } from './context'

interface SelectedItemProps {
  option: SelectOptionsType
  idx: number
}

const SelectedItem = ({ option, idx }: SelectedItemProps) => {
  const { handleRemoveSelected } = useAutocomplete()

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

export default SelectedItem
