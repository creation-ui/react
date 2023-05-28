import { DropdownMaxHeight } from '../../../types'

export const getDropdownHeight = (
  maxHeight: DropdownMaxHeight = 500,
  availableHeight: number
): string => {
  const type = typeof maxHeight

  switch (type) {
    case 'number':
      return maxHeight + 'px'
    case 'string':
      return maxHeight === 'available'
        ? availableHeight + 'px'
        : (maxHeight as string)
    default:
      return undefined
  }
}
