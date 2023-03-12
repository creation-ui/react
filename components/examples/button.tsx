import { DocumentedProperty } from '@models/system'
import { iconProp } from './shared-props'

export const properties: DocumentedProperty[] = [
  {
    name: 'children',
    description: 'The content of the button group.',
    type: 'React.ReactNode',
  },
  {
    ...iconProp,
    name: 'iconLeft',
    description: "Icon on the left side of the component's children",
  },
  {
    ...iconProp,
    name: 'iconRight',
    description: "Icon on the right side of the component's children",
  },
]
