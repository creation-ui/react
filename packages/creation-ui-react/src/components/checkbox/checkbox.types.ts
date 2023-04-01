import { ReactNode } from 'react'
import type { ElementSize } from '../../types'

export interface CheckboxProps
  extends Omit<React.ComponentProps<'input'>, 'size'> {
  /**
   * The label for the checkbox.
   */
  label?: string
  /**
   * The size of the checkbox.
   */
  size?: ElementSize
  /**
   * Indeterminate state of checkbox, overwrites checked
   */
  indeterminate?: boolean
  /**
   * Disabled state of checkbox
   */
  disabled?: boolean
  /**
   * Element focus ring?
   */
  enableFocusRing?: boolean
  // TODO: handle <HelperText/>
  error?: ReactNode
  // TODO: handle <HelperText/>
  helperText?: ReactNode
}
