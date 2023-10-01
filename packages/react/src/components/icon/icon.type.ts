import type { HTMLProps, SVGProps } from 'react'
import type { ClassName, IconType } from '@creation-ui/core'

export interface IconProps
  extends Omit<HTMLProps<HTMLDivElement>, 'className'> {
  /**
   * Icon name from Material Icons collection
   */
  icon: IconType
  /**
   * Additional class names
   */
  className?: ClassName
}

export interface SVGElementProps extends SVGProps<SVGSVGElement> {
  title?: string
}
