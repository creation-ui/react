export interface TimeSelectorProps {
  value?: Date
  onSelect: (date: Date) => void
  format?: 12 | 24
}

export interface OnTimeSliderSelectArgs {
  hour?: number
  minute?: number
  second?: number
}