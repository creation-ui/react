import { FC, useRef, useState } from 'react'
import { useTheme } from '../../theme'
import { Calendar } from '../calendar'
import { Input } from '../input'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { DateInputProps } from './types'

export const DateInput: FC<DateInputProps> = props => {
  const { size: defaultSize } = useTheme()
  const {
    size = defaultSize,
    value,
    onChange,
    inputProps,
    ...calendarProps
  } = props

  const [popoverVisible, setPopoverVisible] = useState(false)
  const ref = useRef(null)
  const handleDateSelect = (date: Date | null) => {
    onChange?.(date)
    setPopoverVisible(false)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    const parsedDate = new Date(inputValue)

    if (!isNaN(parsedDate.valueOf())) {
      onChange?.(parsedDate)
    } else {
      onChange?.(null)
    }
  }

  const handleInputFocus = () => {
    setPopoverVisible(true)
  }

  const handlePopoverClose = () => {
    setPopoverVisible(false)
  }

  return (
    <>
      <Popover
        open={popoverVisible}
        onOpenChange={setPopoverVisible}
        placement='bottom-start'
      >
        <PopoverTrigger>
          <Input
            {...inputProps}
            ref={ref}
            size={size}
            value={value ? value.toLocaleDateString() : ''}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </PopoverTrigger>
        <PopoverContent>
          <Calendar {...calendarProps} onClick={handleDateSelect} />
        </PopoverContent>
      </Popover>
    </>
  )
}
