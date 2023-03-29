import {
  PlaygroundContextValue,
  usePlayground,
} from '@components/playground/context'
import { ButtonGroup } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'

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
}

export const properties: DocumentedProperty[] = [
  {
    name: 'children',
    description: 'The content of the button group.',
    type: 'React.ReactNode',
  },
]
