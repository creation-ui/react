import { ToggleGroup, ToggleGroupProps } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { mdiAbacus, mdiAlarm, mdiBedQueenOutline } from '@mdi/js'
import Icon from '@mdi/react'

export const ToggleGroupExample = ({ size }: ToggleGroupProps) => {
  const options = [
    { value: '1', label: <Icon path={mdiAbacus} size={0.9} /> },
    { value: '2', label: <Icon path={mdiAlarm} size={0.9} /> },
    { value: '3', label: <Icon path={mdiBedQueenOutline} size={0.9} /> },
  ]

  return <ToggleGroup size={size} options={options} label='Select option' />
}

export const properties: DocumentedProperty[] = [
  {
    name: 'label',
    type: 'string',
    description: 'The label of the toggle group',
  },
  {
    name: 'options',
    type: 'ToggleGroupOption[]',
    description: 'Options to select, see ToggleGroupOption below',
  },
  {
    name: 'required',
    type: 'boolean',
    description: 'Is the toggle group marked as required?',
  },
  {
    name: 'onChange',
    type: '(value: T = string): void;',
    description:
      'Callback when the value changes. Type of value is inherited from the options - string is default',
  },
]

export const optionProps: DocumentedProperty[] = [
  {
    name: 'label',
    type: 'string | React.ReactNode',
    description: 'The title of the option',
  },
  {
    name: 'value',
    type: 'string',
    description: 'The value of the option',
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'Is option disabled?',
  },
]
