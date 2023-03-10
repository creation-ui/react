import { Button, Tooltip, TooltipProps } from '@creation-ui/react'
import { ELEMENT_POSITION } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { ListOrTypes } from 'utils/list-or-types'

export const TooltipExample = ({ ...props }: TooltipProps) => {
  return (
    <Tooltip {...props} content='This is important button'>
      <Button variant='contained'>Submit</Button>
    </Tooltip>
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
