import { Playground } from '@components/playground'
import { Callout, ElementVariant } from '@creation-ui/react/index'
import { mdiCheckCircle, mdiEyeOffOutline, mdiEyeOutline } from '@mdi/js'
import { Icon } from '@mdi/react'
import { DocumentedProperty } from 'models/system'
import {
  sizeControl,
  statusControl,
  variantControl,
} from './shared-playground-controls'
import { iconProp, labelProp, sizeProp, statusProp } from './shared-props'

const ICON_OPTIONS = [
  {
    label: <Icon path={mdiEyeOutline} size={1} />,
    value: <Icon path={mdiCheckCircle} size={1} />,
  },
  { label: <Icon path={mdiEyeOffOutline} size={1} />, value: null },
]

const CALLBACK_OPTIONS = [
  {
    label: 'Closable',
    value: () => {
      alert('Callout closed')
    },
  },
  { label: 'Without callback', value: null },
]

export const CalloutPlayground = () => {
  return (
    <Playground
      component={Callout}
      name='Callout'
      controls={[
        //
        sizeControl,
        statusControl,
        variantControl,
        {
          name: 'title',
          type: 'string',
          defaultValue: 'Action completed',
        },
        {
          name: 'description',
          type: 'string',
          defaultValue: 'Your request has been processed successfully.',
        },
        {
          name: 'icon',
          type: 'array',
          values: ICON_OPTIONS,
        },
        {
          label:"Close Callback",
          name: 'onClose',
          type: 'array',
          values: CALLBACK_OPTIONS,
        },
      ]}
    />
  )
}

export const properties: DocumentedProperty[] = [
  { ...labelProp, name: 'title', description: 'Title of the callout' },
  {
    ...labelProp,
    name: 'content',
    description: 'Content of the callout',
  },
  statusProp,
  sizeProp,
  iconProp,
]

interface CalloutExampleProps {
  displayTitle?: boolean
  displayIcon?: boolean
  variant?: ElementVariant
}
