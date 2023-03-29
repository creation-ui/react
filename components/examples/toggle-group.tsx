import Icon from '@components/icon'
import {
  PlaygroundContextValue,
  usePlayground,
} from '@components/playground/context'
import { ToggleGroup, ToggleGroupProps } from '@creation-ui/react'
import {
  mdiFormatAlignCenter,
  mdiFormatAlignLeft,
  mdiFormatAlignRight,
} from '@mdi/js'
import { DocumentedProperty } from 'models/system'

export const ToggleGroupExample = ({ size }: ToggleGroupProps) => {
  const iconSize = {
    sm: 0.7,
    md: 0.9,
    lg: 1.1,
  }[size || 'md']

  const options = [
    { value: '1', label: <Icon path={mdiFormatAlignLeft} size={iconSize} /> },
    { value: '2', label: <Icon path={mdiFormatAlignCenter} size={iconSize} /> },
    { value: '3', label: <Icon path={mdiFormatAlignRight} size={iconSize} /> },
  ]
  return <ToggleGroup size={size} options={options} label='Select option' />
}

export const playgroundConfig: PlaygroundContextValue['config'] = {
  size: true,
}

export const ToggleGroupPlayground = ({ ...props }: ToggleGroupProps) => {
  const { state } = usePlayground()

  const iconSize = {
    sm: 0.7,
    md: 0.9,
    lg: 1.1,
  }[state.size || 'md']

  const options = [
    { value: '1', label: <Icon path={mdiFormatAlignLeft} size={iconSize} /> },
    { value: '2', label: <Icon path={mdiFormatAlignCenter} size={iconSize} /> },
    { value: '3', label: <Icon path={mdiFormatAlignRight} size={iconSize} /> },
  ]
  return (
    <ToggleGroup
      //
      {...props}
      {...state}
      options={options}
    />
  )
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
