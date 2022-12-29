import React from 'react'

export type ModalProps = React.ComponentProps<'div'> & {
  children?: React.ReactNode
  open?: boolean
  onClose?: (value?: boolean) => void
  onOverlayClick?: () => void
}

export interface ModalTitleProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}
