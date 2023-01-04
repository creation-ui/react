import { ClassName, ElementSize } from '../../types'

export interface ProgressBarProps {
  /**
   * How large should the element be?
   */
  size?: ElementSize
  /**
   * The value of the progress bar.
   */
  value: number
  /**
   * Class name to be applied to the progress bar.
   */
 className?: ClassName
  /**
   * Whether to show the value of the progress bar.
   */
  showValue?: boolean
  /**
   * Function to format the value of the progress bar.
   */
  formatDisplayValue?: (value: number) => string
}
