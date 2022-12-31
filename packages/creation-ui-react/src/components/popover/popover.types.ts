import { ClassName } from '@types'
import React from 'react'
import Stick from 'react-stick'

type StickProps = React.ComponentProps<typeof Stick>

export interface PopoverProps extends Omit<StickProps, 'className'> {
  className?: ClassName
  open?: boolean
}
