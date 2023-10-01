import { passThrough } from '@creation-ui/core'
import { DropdownProps } from '@creation-ui/core'

export const DROPDOWN_MARGIN = 4

export const dropdownInitialProps: Partial<DropdownProps> = {
  loadingText: 'Loading...',
  emptyText: 'Data is empty',
  notFoundText: 'Nothing found',
  placeholder: 'Select option',
  multiple: false,
  value: null,
  options: [],
  limit: 3,
  onChange: passThrough,
  getLimitText: passThrough,
}
