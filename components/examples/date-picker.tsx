import { DatePicker, DatePickerProps } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { useState } from 'react'

export const DatePickerExample = ({ ...props }: DatePickerProps) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date())
  return (
    <div className='flex flex-col gap-5'>
      <pre className='text-xs'>{JSON.stringify(startDate)}</pre>
      <DatePicker
        {...props}
        selected={startDate}
        onChange={(date: Date | null) => setStartDate(date)}
      />
    </div>
  )
}

export const properties: DocumentedProperty[] = [
  {
    description: 'Class names override',
    name: 'className',
    type: 'string',
  },
]
