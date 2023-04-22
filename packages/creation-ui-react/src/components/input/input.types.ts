import type React from 'react'
import type { BaseComponentProps, ElementVariant } from '../../types'

export type InputProps = Omit<React.ComponentProps<'input'>, 'size'> &
  BaseComponentProps & {
    /**
     * Input type
     * @default input
     */
    as?: any
    /**
     * Is button loading?
     */
    loading?: boolean
    /**
     * What variant should button be ?
     */
    variant?: ElementVariant
    /**
     * Icon to be displayed on the left side of the input
     */
    startAdornment?: React.ReactNode
    /**
     * Icon to be displayed on the right side of the input
     */
    endAdornment?: React.ReactNode
    /**
     * Is button fullwidth?
     */
    fullWidth?: boolean
  }
