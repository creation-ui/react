import type React from 'react'
import type { InputBaseProps } from '@creation-ui/core'

export type InputProps = Omit<React.ComponentProps<'input'>, 'size' | 'ref'> &
  Omit<InputBaseProps, 'children'>
