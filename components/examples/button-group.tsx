import {
  PlaygroundContextValue,
  usePlayground,
} from '@components/playground/context'
import { ButtonGroup } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import {
  classNameProps,
  disabledProps,
  labelProp,
  onClickCallback,
  sizeProp,
  statusProp,
} from './shared-props'

export const ButtonGroupPlayground = () => {
  const { state } = usePlayground()

  const buttons = [
    { label: 'Year', onClick: () => {} },
    { label: 'Month', onClick: () => {} },
    { label: 'Day', onClick: () => {} },
  ]

  return <ButtonGroup {...state} options={buttons} />
}

export const playgroundConfig: PlaygroundContextValue['config'] = {
  size: true,
  name: 'ButtonGroup',
}

export const properties: DocumentedProperty[] = [
  {
    name: 'options',
    description: 'Options of the button group.',
    type: 'ButtonGroupOption[]',
  },
  classNameProps,
  sizeProp,
  statusProp,
]

export const buttonGroupOptions: DocumentedProperty[] = [
  classNameProps,
  labelProp,
  onClickCallback,
  disabledProps,
]
