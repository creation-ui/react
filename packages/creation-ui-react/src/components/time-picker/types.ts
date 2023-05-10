import { InputProps } from '../input'

export interface TimePickerProps extends Omit<InputProps, 'onChange' | 'value'> {
  onChange?: (date: Date | null) => void
  value?: Date | null
  format?: 12 | 24
}
