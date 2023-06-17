import {
  ELEMENT_POSITION,
  ELEMENT_SIZES,
  ELEMENT_STATUS,
} from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { ListOrTypes } from 'utils/list-or-types'

export const positionProp: DocumentedProperty = {
  name: 'position',
  type: ListOrTypes([...ELEMENT_POSITION]),
  description: 'Position of the element',
}
export const idProp: DocumentedProperty = {
  name: 'id',
  type: 'string',
  description: 'ID of the element',
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

export const iconProp: DocumentedProperty = {
  description: 'Icon provided to component as ReactNode',
  name: 'icon',
  type: 'React.ReactNode',
}

export const statusProp: DocumentedProperty = {
  description: 'Status',
  name: 'status',
  type: ListOrTypes([...ELEMENT_STATUS, 'undefined']),
}

export const openProps: DocumentedProperty = {
  description: 'Is component visible',
  name: 'open',
  type: 'boolean',
  defaultValue: 'false',
}
export const disabledProps: DocumentedProperty = {
  description: 'Is component disabled',
  name: 'disabled',
  type: 'boolean',
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
