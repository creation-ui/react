import { DocumentedProperty } from 'models/system'
import { labelProp, sizeProp, statusProp } from './shared-props'
import { usePlayground } from '@components/playground/context'
import { StatusBadge } from '@creation-ui/react/components'

export const StatusBadgePlayground = () => {
  const { state } = usePlayground()

  return (
    <StatusBadge
      {...state}
      label={state.content ? state.content : undefined}
    />
  )
}

export const properties: DocumentedProperty[] = [
  labelProp,
  statusProp,
  sizeProp,
]
