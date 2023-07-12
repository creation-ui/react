import { DROPDOWN_MARGIN } from './constants'

export const getTop = ({ placement, y = 0 }) => {
  switch (placement) {
    case 'top':
      return y - DROPDOWN_MARGIN
    default:
    case 'bottom':
      return y + DROPDOWN_MARGIN
  }
}
