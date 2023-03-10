import clsx from 'clsx'
import ReactDatePicker from 'react-datepicker'
import { ErrorText, InteractiveContainer, Loader } from '..'
import { inputContainer, label, shared, text } from '../../classes'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import { Icon } from '../icon'
import type { DatePickerProps } from './date-picker.types'

const iconClasses = 'w-5 h-5 text-gray-600 cursor-pointer'

const ChevronRight = () => <Icon icon='chevron_right' className={iconClasses} />
const ChevronLeft = () => <Icon icon='chevron_left' className={iconClasses} />

const DatePicker = (props: DatePickerProps) => {
  const { size: defaultSize } = useTheme()
  const {
    loading,
    helperText,
    error,
    size = defaultSize,
    className,
    id,
    ...rest
  } = props
  const componentId = useId(id)

  const disabled = props.disabled || props.readOnly

  const containerClasses = clsx(
    inputContainer({ disabled, error: !!error }),
    text({ size })
  )
  return (
    <InteractiveContainer disabled={disabled} className={className}>
      <div className={containerClasses}>
        <label
          htmlFor={componentId}
          className={label({ size, required: props.required })}
          children={props.label}
          aria-label={props.label?.toString()}
        />
        <Loader className={clsx(shared.loaderInputPosition({ loading }))} />
        <ReactDatePicker
          {...rest}
          id={componentId}
          aria-readonly={!!props.readOnly}
        />
        <ErrorText error={error} />
      </div>
    </InteractiveContainer>
  )
}

DatePicker.defaultProps = {
  popperClassName: 'react-datepicker-left',
  nextMonthButtonLabel: <ChevronRight />,
  previousMonthButtonLabel: <ChevronLeft />,
}

export default DatePicker
