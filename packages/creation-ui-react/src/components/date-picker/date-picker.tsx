import { Icon } from '../'
import clsx from 'clsx'
import ReactDatePicker from 'react-datepicker'
import { DatePickerProps } from './date-picker.types'
import './date-picker.module.css'

const iconClasses = 'w-5 h-5 text-gray-600 cursor-pointer'

const ChevronRight = () => <Icon icon='chevron_right' className={iconClasses} />
const ChevronLeft = () => <Icon icon='chevron_left' className={iconClasses} />

const DatePicker = ({ className, ...props }: DatePickerProps) => {
  return (
    <div className={clsx('relative w-auto', className)}>
      <ReactDatePicker {...props} />
    </div>
  )
}

DatePicker.defaultProps = {
  popperClassName: 'react-datepicker-left',
  nextMonthButtonLabel: <ChevronRight />,
  previousMonthButtonLabel: <ChevronLeft />,
}

export default DatePicker
