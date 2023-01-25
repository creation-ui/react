import clsx from 'clsx'
import ReactDatePicker from 'react-datepicker'
import { Icon } from '..'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import type { DatePickerProps } from './date-picker.types'
import { ErrorText, Loader } from '..'
import { input, inputContainer, label, shared, text } from '../../classes'
import React from 'react'

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
    <div className={containerClasses}>
      <label
        htmlFor={componentId}
        className={label({ size, required: props.required })}
        children={props.label}
        aria-label={props.label?.toString()}
      />

      <ReactDatePicker
        {...rest}
        id={componentId}
        className={input({
          size,
          variant: props.variant,
          className,
        })}
        aria-readonly={!!props.readOnly}
      />
      {loading && <Loader className={clsx(shared.loaderInputPosition)} />}
      <ErrorText error={error} />
    </div>
  )
}

DatePicker.defaultProps = {
  popperClassName: 'react-datepicker-left',
  nextMonthButtonLabel: <ChevronRight />,
  previousMonthButtonLabel: <ChevronLeft />,
}

export default DatePicker
