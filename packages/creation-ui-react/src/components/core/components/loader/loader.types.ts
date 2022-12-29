import { ElementSize, SharedClassName } from '../../types'

export interface LoaderProps extends SharedClassName {
  /**
   * Use white loader
   */
  white?: boolean
  /**
   * How large should the button be?
   */
  size?: ElementSize
}
