import { HTMLProps } from '@creation-ui/core'
import { ReactNode } from 'react'

export interface MenuProps
  extends Partial<
    Omit<HTMLProps<HTMLButtonElement>, 'label' | 'children' | 'style'>
  > {
  level?: number
  nested?: boolean
  label?: string
  children?: ReactNode
  style?: React.CSSProperties
  maxWidth?: number
  cx?: {
    container?: { outer?: string; inner?: string }
    trigger?: string
  }
}

export interface MenuItemProps {
  level?: number
  label: ReactNode
  disabled?: boolean
  maxWidth?: number
  onClick?: () => void
  cx?: {
    container?: string
    label?: string
  }
}
