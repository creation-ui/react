import React, { useState } from 'react'
import { DateInput } from '@creation-ui/react'

export const DateInputExample: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
  }

  return (
    <div className='flex flex-col gap-2'>
      <DateInput
        value={selectedDate}
        onChange={handleDateChange}
        inputProps={{
          placeholder: 'Select date',
          label: 'Date',
          clearable: true,
          onClear: () => setSelectedDate(null),
        }}
      />
      {selectedDate && (
        <p>Selected date: {selectedDate.toLocaleDateString()}</p>
      )}
    </div>
  )
}

export const properties = []
