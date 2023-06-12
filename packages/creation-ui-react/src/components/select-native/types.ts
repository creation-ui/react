import { DropdownOptionType, ElementSize } from '../../types'

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options?: DropdownOptionType[]
  size?: ElementSize
  clearable?: boolean
  error?: React.ReactNode
  loading?: boolean
  readOnly?: boolean
  onClear?: () => void
  helperText?: React.ReactNode
  label?: string
}

export interface SelectViewProps extends Omit<SelectProps, 'size'> {}
