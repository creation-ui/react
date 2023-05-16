import { FC, useRef, useState } from 'react'
import { useTheme } from '../../theme'
import { Input } from '../input'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { TimeSelector } from '../time-selector'
import { TimePickerProps, TimePickerValue } from './types'

export const TimePicker: FC<TimePickerProps> = props => {
  const { size: defaultSize } = useTheme()
  const { size = defaultSize, value, onChange, format, ...rest } = props

  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const handleTimeSelect = (date: TimePickerValue) => {
    onChange?.(date)
  }

  const handleClick = () => setOpen(true)

  return (
    <Popover open={open} onOpenChange={setOpen} placement='bottom-start'>
      <PopoverTrigger>
        <Input
          {...rest}
          ref={ref}
          size={size}
          readOnly
          value={value ? value.toLocaleTimeString() : ''}
          onClick={handleClick}
        />
      </PopoverTrigger>
      <PopoverContent>
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
