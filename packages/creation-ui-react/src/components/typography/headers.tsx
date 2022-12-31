import React from 'react'
import { ClassName, ElementTypography } from '../../types'
import { ElementType } from 'react'
import { typography } from './classes'

export interface TypographyProps extends React.ComponentProps<any> {
  variant?: ElementTypography
  className?: ClassName
  children?: React.ReactNode
  as?: ElementType
}

const getElementType = (
  variant: ElementTypography = 'paragraph'
): ElementType => {
  const map: Record<ElementTypography, ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    lead: 'p',
    small: 'p',
    paragraph: 'p',
  }
  return map[variant]
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ variant, color, textGradient, as, className, children, ...rest }, ref) => {
    const classes = typography({ typing: variant, className })

    const Component = as ?? getElementType(variant)

    return (
      <Component {...rest} ref={ref} className={classes}>
        {children}
      </Component>
    )
  }
)

export default Typography
