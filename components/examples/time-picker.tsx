import React, { useState } from 'react'
import { TimePicker } from '@creation-ui/react'

export const TimePickerExample: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<Date | null>(null)

  const handleTimeChange = (date: Date | null) => {
    setSelectedTime(date)
  }

  return (
    <div className='flex flex-col gap-2'>
      <TimePicker
        value={selectedTime}
        onChange={handleTimeChange}
        placeholder='Select time'
        label='Time'
      />
      {selectedTime && (
        <p>Selected time: {selectedTime.toLocaleTimeString()}</p>
      )}
    </div>
  )
}

export const properties = []
