import { DropdownMaxHeight } from '../../../types'

const asPx = (value: number | string): string => `${value}px`

export const getDropdownHeight = (
  maxHeight: DropdownMaxHeight = 500,
  availableHeight: number
): string => {
  const type = typeof maxHeight

  if (type === 'number') {
    return maxHeight >= availableHeight
      ? asPx(availableHeight)
      : asPx(maxHeight)
  }

  if (type === 'string') {
    return maxHeight === 'available'
      ? asPx(availableHeight)
      : (maxHeight as string)
  }
}
