import { Playground } from '@components/playground'
import { usePlayground } from '@components/playground/context'
import { getState } from '@components/playground/helpers'
import { DatePicker, DatePickerProps } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { useState } from 'react'

const config = {
  size: true,
  error: true,
  loading: true,
  disabled: true,
  readOnly: true,
  required: true,
}

export const DatePickerExample = ({
  ...props
}: Omit<DatePickerProps, 'onChange'>) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date())
  const playground = usePlayground()

  const state = getState(playground.state, config)

  return (
    <DatePicker
      {...state}
      {...props}
      selected={startDate}
      onChange={(date: Date | null) => setStartDate(date)}
    />
  )
}

export const DatePickerPlayground = () => {
  return (
    <Playground config={{ name: 'DatePicker', ...config }}>
      <DatePickerExample />
    </Playground>
  )
}

export const properties: DocumentedProperty[] = [
  {
    description: 'Class names override',
    name: 'className',
    type: 'string',
  },
]
