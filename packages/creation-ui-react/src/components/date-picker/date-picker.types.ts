import { ClassName } from '../../types'
import DatePicker from 'react-datepicker'

export type DatePickerProps = DatePicker['props'] & {
 className?: ClassName
}
