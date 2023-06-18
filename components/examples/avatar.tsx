import { Playground } from '@components/playground'
import { Avatar, AVATAR_VARIANTS } from '@creation-ui/react'
import {
  ELEMENT_PLACEMENT_HORIZONTAL,
  ELEMENT_PLACEMENT_VERTICAL,
  ELEMENT_SIZES,
} from '@creation-ui/react/types'
import {
  mdiCircleOutline,
  mdiSquareOutline,
  mdiSquareRoundedOutline,
} from '@mdi/js'
import Icon from '@mdi/react'
import { DocumentedProperty } from 'models/system'
import { ListOrTypes } from 'utils/list-or-types'
import {
  positionHorizontalControl,
  positionVerticalControl,
  sizeControl,
  statusControl,
} from './shared-playground-controls'

const avatarVariants = [
  {
    value: 'circle',
    label: <Icon title='Circle' path={mdiCircleOutline} size={1} />,
  },
  {
    value: 'rounded',
    label: <Icon title='Rounded' path={mdiSquareRoundedOutline} size={1} />,
  },
  {
    value: 'square',
    label: <Icon title='Square' path={mdiSquareOutline} size={1} />,
  },
]

const avatarBadgeType = [
  { value: 'dot', label: 'Dot' },
  { value: 'count', label: 'Count' },
]

export const AvatarPlayground = () => (
  <Playground
    component={Avatar}
    name={'Avatar'}
    componentProps={{
      alt: 'Avatar',
    }}
    controls={[
      //
      sizeControl,
      {
        name: 'variant',
        values: avatarVariants,
        defaultValue: 'circle',
        type: 'array',
      },

      {
        name: 'src',
        label: 'Image URL',
        type: 'string',
        defaultValue:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
      },
      {
        name: 'badge',
        type: 'object',
        controls: [
          {
            name: 'placement',
            label: 'Placement',
            type: 'object',
            controls: [positionHorizontalControl, positionVerticalControl],
          },
          {
            name: 'type',
            label: 'Type',
            type: 'array',
            values: avatarBadgeType,
          },
          {
            name: 'pulse',
            type: 'boolean',
          },
          {
            name: 'count',
            label: 'Counter',
            type: 'number',
          },
          {
            ...statusControl,
            name: 'color',
          },
        ],
      },
    ]}
  />
)

export const properties: DocumentedProperty[] = [
  {
    name: 'variant',
    type: ListOrTypes([...AVATAR_VARIANTS]),
    defaultValue: 'circle',
    description: 'The shape of the avatar.',
  },
  {
    name: 'size',
    type: ListOrTypes([...ELEMENT_SIZES]),
    defaultValue: 'sm',
    description: 'The size of the avatar.',
  },
  {
    name: 'src',
    type: 'string | null',
    description: 'The source of the avatar image.',
  },
  {
    name: 'alt',
    type: 'string',
    description: 'The alt text of the avatar.',
  },
  {
    name: 'badge',
    type: 'object',
    defaultValue: 'null',
    description: 'The badge of the avatar.',
  },
]

export const badgeProperties: DocumentedProperty[] = [
  {
    name: 'placement',
    type: 'ElementPlacement',
    description: 'Vertical and horizontal placement of the badge',
  },
  {
    name: 'pulse',
    type: 'boolean',
    description: 'Notification badge pulsing?',
  },
  {
    name: 'type',
    type: 'dot | count',
    description: 'Badge type',
  },
  {
    name: 'count',
    type: 'number',
    description: 'Badge notifications count',
  },
]

export const placementProperties: DocumentedProperty[] = [
  {
    name: 'horizontal',
    type: ListOrTypes([...ELEMENT_PLACEMENT_HORIZONTAL]),
    description: 'Horizontal placement of the badge',
  },
  {
    name: 'vertical',
    type: ListOrTypes([...ELEMENT_PLACEMENT_VERTICAL]),
    description: 'Vertical placement of the badge',
  },
]
