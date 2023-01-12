import type { ClassName } from '../../types'
import type React from 'react'
import type Stick from 'react-stick'

type StickProps = React.ComponentProps<typeof Stick>

export interface PopoverProps extends Omit<StickProps, 'className'> {
  className?: ClassName
  open?: boolean
}
