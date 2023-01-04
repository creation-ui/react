import { DocumentedProperty } from 'models/system'
import { childrenProp, labelProp, sizeProp } from './shared-props'
import { Radio, RadioGroup, RadioGroupProps } from '@creation-ui/react'
import { useState } from 'react'

export const RadioGroupExample = ({ size }: RadioGroupProps) => {
  const [selected, setSelected] = useState<string>('music')

  const options = [
    { label: 'Music', value: 'music' },
    { label: 'Games', value: 'games' },
    { label: 'Sports', value: 'sports' },
    { label: 'Eating', value: 'eating' },
    { label: 'Coding', value: 'coding' },
    { label: 'Sleeping', value: 'sleeping' },
  ]

  const handleClick = e => setSelected(e.target.value)

  return (
    <RadioGroup size={size} label='Select your favorite activities'>
      {options.map(option => (
        <Radio
          size={size}
          label={option.label}
          onClick={handleClick}
          value={option.value}
          checked={selected === option.value}
        />
      ))}
    </RadioGroup>
  )
}

export const properties: DocumentedProperty[] = [
  sizeProp,
  labelProp,
  childrenProp,
]
