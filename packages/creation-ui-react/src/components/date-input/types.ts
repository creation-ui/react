import { CalendarProps } from '../calendar'
import { InputProps } from '../input'

export interface DateInputProps extends Omit<CalendarProps,  'onClick'> {
  onChange?: (date: Date | null) => void
  value?: Date | null
  inputProps?: Omit<InputProps, 'onChange'  | 'value' | 'ref'>
}
