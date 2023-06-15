import { Playground } from '@components/playground'
import { usePlayground } from '@components/playground/context/context'
import { getState } from '@components/playground/utils/helpers'
import { Button, ELEMENT_POSITION, Tooltip } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { ListOrTypes } from 'utils/list-or-types'

const config = {
  position: true,
  content: true,
}

export const TooltipExample = () => {
  const playground = usePlayground()

  const state = getState(playground.state, config)

  return (
    <Tooltip {...state}>
      <Button variant='contained'>Submit</Button>
    </Tooltip>
  )
}

export const TooltipPlayground = () => {
  return (
    <Playground
      config={{
        name: 'Tooltip',
        ...config,
      }}
    >
      <TooltipExample />
    </Playground>
  )
}

export const properties: DocumentedProperty[] = [
  {
    name: 'position',
    type: ListOrTypes([...ELEMENT_POSITION]),
    defaultValue: 'top',
    description: 'Size of element',
  },
  {
    description: 'Content inside tooltip',
    name: 'content',
    type: 'React.ReactNode',
  },
  {
    description: 'This is the content that tooltip wraps around',
    name: 'children',
    type: 'React.ReactNode',
  },
  {
    description: 'Class names override',
    name: 'className',
    type: 'string',
  },
]
