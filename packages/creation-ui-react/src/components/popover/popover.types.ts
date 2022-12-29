import React from 'react'
import Stick from 'react-stick'

export interface PopoverProps extends React.ComponentProps<typeof Stick> {
  className?: string
  open?: boolean
}
