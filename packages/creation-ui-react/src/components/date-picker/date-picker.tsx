import clsx from 'clsx'
import ReactDatePicker from 'react-datepicker'
import { inputContainer, label, classes, text } from '../../classes'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import { Icon } from '../icon'
import type { DatePickerProps } from './date-picker.types'
import { InteractiveContainer } from '../interactive-container'
import { Loader } from '../loader'
import { HelperText } from '../typography'

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

  const disabled = props.disabled
  const readOnly = props.readOnly || loading

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
        <Loader className={clsx(classes.loaderInputPosition({ loading }))} />
        <ReactDatePicker
          {...rest}
          id={componentId}
          disabled={disabled}
          readOnly={readOnly}
          aria-readonly={!!props.readOnly}
        />
        <HelperText
          size={size}
          helperText={error || helperText}
          error={Boolean(error)}
        />
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
