import { Playground } from '@components/playground'
import { Chip } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import {
  labelControl,
  sizeControl,
  statusControl,
  variantBaseControl,
} from './shared-playground-controls'
import { labelProp, sizeProp, statusProp } from './shared-props'

export const ChipPlayground = () => (
  <Playground
    component={Chip}
    name='Chip'
    controls={[labelControl, variantBaseControl, sizeControl, statusControl]}
  />
)

export const ChipDeleteable = () => (
  <Playground
    component={Chip}
    name='Chip'
    controls={[labelControl, variantBaseControl, sizeControl, statusControl]}
  />
)

export const ChipWithStartAdornment = () => (
  <Playground
    component={Chip}
    name='Chip'
    controls={[labelControl, variantBaseControl, sizeControl, statusControl]}
  />
)

export const properties: DocumentedProperty[] = [
  labelProp,
  statusProp,
  sizeProp,
]
