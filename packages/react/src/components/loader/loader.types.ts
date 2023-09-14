import type { BaseComponentProps } from '@creation-ui/core'

export interface LoaderProps
  extends Pick<BaseComponentProps, 'size' | 'className'> {
  /**
   * Use white loader
   */
  white?: boolean
  /**
   * Is visible? Default true
   */
  active?: boolean
}
