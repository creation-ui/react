import { ELEMENT_SIZES, ELEMENT_VARIANTS } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { ListOrTypes } from 'utils/list-or-types'
import { iconProp } from './shared-props'

export const inputBaseProperties: DocumentedProperty[] = [
  {
    name: 'size',
    type: ListOrTypes([...ELEMENT_SIZES]),
    defaultValue: 'md',
    description: 'Size of the element',
  },
  {
    name: 'variant',
    type: ListOrTypes([...ELEMENT_VARIANTS]),
    defaultValue: 'outline',
    description: 'Size of the element',
    experimental: true,
  },
  { name: 'required', type: 'boolean', description: 'Is element required?' },
  { name: 'readOnly', type: 'boolean', description: 'Is element read-only?' },
  { name: 'label', type: 'string', description: 'Input label' },
  { name: 'disabled', type: 'boolean', description: 'Is disabled?' },
  { name: 'loading', type: 'boolean', description: 'Show loading state' },
  {
    ...iconProp,
    name: 'startAdornment',
    description: 'Icon on the left side of the component',
  },
  {
    ...iconProp,
    name: 'endAdornment',
    description: 'Icon on the right side of the component',
  },
  {
    name: 'helperText',
    type: 'boolean',
    description: 'Additional information for display with component',
  },
  {
    name: 'error',
    type: 'boolean',
    description: 'Text to be displayed when input is invalid',
  },
]
