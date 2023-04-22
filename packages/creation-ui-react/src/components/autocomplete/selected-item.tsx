import { UseMultipleSelectionGetSelectedItemPropsOptions } from 'downshift'
import { SelectOptionsType } from '../../types'
import { ClearButton } from '../clear-button'
import { useAutocomplete } from './autocomplete.context'
import { selectedOptionClasses } from './classes'

interface SelectedItemProps {
  option: SelectOptionsType
  idx: number
  getSelectedItemProps: (
    options: UseMultipleSelectionGetSelectedItemPropsOptions<any>
  ) => any
  removeSelectedItem: (item: any) => void
}

const SelectedItem = ({
  option,
  idx,
  getSelectedItemProps,
  removeSelectedItem,
}: SelectedItemProps) => {
  const { handleRemoveSelected } = useAutocomplete()

  const handleRemove = e => {
    e?.stopPropagation?.()
    handleRemoveSelected(option)
  }

  return (
    <span
      className={selectedOptionClasses()}
      {...getSelectedItemProps({ selectedItem: option, index: idx })}
    >
      {option.label}
      <ClearButton onClick={handleRemove} />
    </span>
  )
}

export default SelectedItem
