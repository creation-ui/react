import type { ClassName } from '../../types'
import type DatePicker from 'react-datepicker'

export type DatePickerProps = DatePicker['props'] & {
  className?: ClassName
}
