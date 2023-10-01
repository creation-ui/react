import { InputProps } from '../input'

export type TimePickerValue = Date | null | undefined

export interface TimePickerProps
  extends Omit<InputProps, 'onChange' | 'value'> {
  onChange?: (date: TimePickerValue) => void
  format?: 12 | 24
  value: TimePickerValue
}
