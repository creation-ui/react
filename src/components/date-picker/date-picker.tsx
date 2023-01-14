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
      <style>
        {`
        .react-datepicker {
          @apply select-none cursor-default;
        }

        .react-datepicker__input-container input {
          @apply block w-full text-base md:text-sm bg-white border border-gray-300 rounded shadow-sm form-input;
        }

        .react-datepicker-popper {
          @apply z-40 w-72 text-sm bg-white shadow px-3 py-2 border-2 border-gray-200 rounded;
        }

        .react-datepicker-left {
          @apply absolute left-0 right-auto top-11 transform-none !important;
        }

        .react-datepicker-right {
          @apply absolute right-0 left-auto top-11 transform-none !important;
        }

        .react-datepicker__portal {
          @apply absolute z-10 w-72 text-sm transform-none bg-white shadow px-3 py-2 top-12 right-0 border-2 border-gray-200 rounded;
        }

        .react-datepicker__month-container {
          @apply flex flex-col;
        }

        .react-datepicker__month {
          @apply flex flex-col;
        }

        .react-datepicker__current-month {
          @apply ml-2.5 text-lg font-semibold text-gray-800;
        }

        .react-datepicker__week {
          @apply flex justify-around;
        }

        .react-datepicker__day-names {
          @apply flex justify-around text-gray-400 font-medium text-center text-xs;
        }

        .react-datepicker__day-name {
          @apply w-8 h-8 flex items-center justify-center py-1 rounded-full;
        }

        .react-datepicker__navigation {
          @apply absolute top-2;
        }

        .react-datepicker__navigation--previous {
          @apply right-12 w-8 h-8 rounded transition flex items-center justify-center hover:bg-gray-200;
        }

        .react-datepicker__navigation--next {
          @apply right-4 w-8 h-8 rounded transition flex items-center justify-center hover:bg-gray-200;
        }

        .react-datepicker__day {
          @apply mb-1 w-8 h-8 flex items-center justify-center py-1 text-sm leading-loose transition text-gray-700 rounded cursor-pointer;
        }

        .react-datepicker__day--disabled {
          @apply cursor-not-allowed opacity-40 hover:bg-transparent;
        }

        .react-datepicker__day--outside-month {
          @apply text-gray-300;
        }

        .react-datepicker__day--in-range {
          @apply bg-gray-200;
        }

        .react-datepicker__day--in-selecting-range {
          @apply bg-primary-200;
        }

        .react-datepicker__day--selecting-range-start {
          @apply bg-white border-2 border-primary-500;
        }

        .react-datepicker__day--selecting-range-end {
          @apply bg-white border-2 border-primary-500;
        }

        .react-datepicker__day--selected {
          @apply bg-primary-500 text-white;
        }

        .react-datepicker__day--range-start {
          @apply bg-primary-500 text-white hover:text-gray-700 hover:bg-white;
        }

        .react-datepicker__day--range-end {
          @apply bg-primary-500 text-white hover:text-gray-700 hover:bg-white;
        }

        .react-datepicker__close-icon {
          @apply absolute top-2 right-2 w-6 h-6 text-gray-400 hover:text-gray-600 text-sm;
        }
        `}
      </style>
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
