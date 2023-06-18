import { Playground } from '@components/playground'
import { StatusBadge } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import {
  labelControl,
  sizeControl,
  statusControl,
  variantControl,
} from './shared-playground-controls'
import { labelProp, sizeProp, statusProp } from './shared-props'

export const StatusBadgePlayground = () => {
  return (
    <Playground
      component={StatusBadge}
      name='StatusBadge'
      controls={[
        //
        labelControl,
        variantControl,
        sizeControl,
        statusControl,
      ]}
    />
  )
}

export const properties: DocumentedProperty[] = [
  labelProp,
  statusProp,
  sizeProp,
]
