import type { ClassName, ElementSize } from '../../types'

export interface LoaderProps {
  /**
   * Use white loader
   */
  white?: boolean
  /**
   * How large should the button be?
   */
  size?: ElementSize
  className?: ClassName
}
