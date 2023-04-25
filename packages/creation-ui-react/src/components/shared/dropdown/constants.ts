import { passThrough } from '../../../utils/functions'
import { DropdownProps } from '../../../types'
import { Option } from './option'
import { SelectedOption } from './selected-option'

export const dropdownInitialProps: Partial<DropdownProps> = {
  loadingText: 'Loading...',
  emptyText: 'Data is empty',
  notFoundText: 'Nothing found',
  placeholder: 'Select option',
  multiple: false,
  value: [],
  options: [],
  limit: 3,
  onChange: passThrough,
  getLimitText: passThrough,
  optionComponent: Option,
  selectedOptionComponent: SelectedOption,
}
