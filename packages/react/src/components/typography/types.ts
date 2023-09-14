import { ElementType } from 'react'
import { TypographyConfig } from '../../theme'
import { ClassName, ElementSize, ElementTypography } from '../../types'

export interface TypographyProps extends React.ComponentProps<any> {
  as?: ElementType
  children?: React.ReactNode
  config?: Partial<TypographyConfig>
  className?: ClassName
  size?: ElementSize
}
