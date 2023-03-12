import type React from 'react'
import type { BaseComponentProps, ElementVariants } from '../../types'

export type TextAreaProps = Omit<React.ComponentProps<'textarea'>, 'size'> &
  BaseComponentProps & {
    /**
     * Is loading?
     */
    loading?: boolean
    /**
     * Variant of element
     */
    variant?: ElementVariants
  }
