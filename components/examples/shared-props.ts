import { ELEMENT_POSITION, ELEMENT_SIZES, ELEMENT_STATUS } from '@creation-ui/react/types'
import { DocumentedProperty } from 'models/system'
import { ListOrTypes } from 'utils/list-or-types'

export const positionProp: DocumentedProperty = {
  name: 'position',
  type: ListOrTypes([...ELEMENT_POSITION]),
  description: 'Position of the element',
}
export const sizeProp: DocumentedProperty = {
  name: 'size',
  type: ListOrTypes([...ELEMENT_SIZES]),
  defaultValue: 'md',
  description: 'Size of the element',
}

export const labelProp: DocumentedProperty = {
  description: 'Label',
  name: 'label',
  type: 'React.ReactNode',
}

export const statusProp: DocumentedProperty = {
  description: 'Status',
  name: 'status',
  type: ListOrTypes([...ELEMENT_STATUS, 'undefined']),
}

export const openProp: DocumentedProperty = {
  description: 'Is component visible',
  name: 'open',
  type: 'boolean',
  defaultValue: 'false',
}

//TODO: change to open and remove
export const openPropAsActive: DocumentedProperty = {
  description: 'Is component visible',
  name: 'active',
  type: 'boolean',
  defaultValue: 'false',
}

export const elementTypeProp: DocumentedProperty = {
  description: 'ElementType of the component',
  name: 'as',
  type: 'React.ElementType',
  defaultValue: 'h3',
}

export const childrenProp: DocumentedProperty = {
  description: 'Children to be rendered inside the component',
  name: 'children',
  type: 'React.ReactNode',
}

export const classNameProps: DocumentedProperty = {
  description: 'Class names to add to wrapper component',
  name: 'className',
  type: 'string | string[]',
}

export const loaderWhiteProp: DocumentedProperty = {
  name: 'white',
  type: 'boolean',
  description: 'Use white loader? E.g. to contrast background color',
}

export const onClickCallback: DocumentedProperty = {
  name: 'onClick',
  type: '() => void',
  description: 'Callback function called on element click',
}
