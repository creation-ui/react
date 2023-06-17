import { Playground } from '@components/playground'
import { TimePicker } from '@creation-ui/react'
import { DocumentedProperty } from '@models/system'
import React, { useState } from 'react'
import { inputControlsSet } from './shared-playground-controls'

export const TimePickerExample: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const handleDateChange = (date: any) => {
    setSelectedDate(date)
  }

  return (
    <div>
      <Playground
        component={TimePicker}
        name='TimePicker'
        controls={inputControlsSet}
        componentProps={{
          value: selectedDate,
          onChange: handleDateChange,
        }}
      />
      {selectedDate && (
        <p>Selected date: {selectedDate.toLocaleDateString()}</p>
      )}
    </div>
  )
}

export const properties: DocumentedProperty[] = [
  {
    name: 'value',
    description: 'Time selected in input',
    type: 'Date | null | undefined',
  },
  {
    name: 'onChange',
    description: 'Callback function when time is selected',
    type: '(date: Date | null | undefined) => void',
  },
]
