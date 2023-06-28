import { FC, useRef, useState } from 'react'
import { useTheme } from '../../theme'
import { Input } from '../input'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { TimeSelector } from '../time-selector'
import { TimePickerProps, TimePickerValue } from './types'

const padStart = (value?: number): string =>
  String(value ? (value < 10 ? '0' + value : value) : '--')

const formatTime = (date?: Date): string => {
  const hours = date?.getHours()
  const minutes = date?.getMinutes()

  const h = padStart(hours)
  const min = padStart(minutes)

  return `${h}:${min}`
}

export const TimePicker: FC<TimePickerProps> = props => {
  const { size: defaultSize } = useTheme()
  const {
    size = defaultSize,
    value,
    format,
    clearable = true,
    onChange,
    onClear = () => {
      onChange?.(null)
      setOpen(false)
    },
    ...rest
  } = props

  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const handleTimeSelect = (date: TimePickerValue) => onChange?.(date)
  const handleClick = () => setOpen(true)

  return (
    <Popover open={open} onOpenChange={setOpen} placement='bottom-start'>
      <PopoverTrigger>
        <Input
          {...rest}
          clearable={clearable}
          ref={ref}
          size={size}
          readOnly
          value={value ? formatTime(value) : ''}
          onClick={handleClick}
          onClear={onClear}
        />
      </PopoverTrigger>
      <PopoverContent className='!p-0 !bg-transparent'>
        {open && (
          <TimeSelector
            value={value}
            onSelect={handleTimeSelect}
            format={format}
          />
        )}
      </PopoverContent>
    </Popover>
  )
}
