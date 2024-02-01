import { DocumentedProperty } from '@models/system'
import data from './tree-data.json'
import { Tree } from '@creation-ui/react'

export const TreeExample = () => {
  return <Tree options={data} />
}

export const properties: DocumentedProperty[] = [
  {
    description: 'Class names override',
    name: 'className',
    type: 'string',
  },
]
