import styled from 'styled-components'

export const DatePickerStyles = styled.div`
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
`