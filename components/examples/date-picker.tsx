import React, { useState } from 'react'
import { DatePicker } from '@creation-ui/react'

export const DatePickerExample: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const handleDateChange = (date: any) => {
    setSelectedDate(date)
  }

  return (
    <div className='flex flex-col gap-2'>
      <DatePicker
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
