import React, { useState } from 'react'
import { TimePicker } from '@creation-ui/react'
import { TimePickerValue } from '@creation-ui/react/components/time-picker/types'

export const TimePickerExample: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<TimePickerValue>(null)

  const handleTimeChange = (date: TimePickerValue) => {
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
