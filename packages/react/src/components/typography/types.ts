import { ElementType } from 'react'
import { ClassName, ElementSize, TypographyConfig } from '@creation-ui/core'

export interface TypographyProps extends React.ComponentProps<any> {
  as?: ElementType
  children?: React.ReactNode
  config?: Partial<TypographyConfig>
  className?: ClassName
  size?: ElementSize
}
