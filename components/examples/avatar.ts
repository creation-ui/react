import { DocumentedProperty } from 'models/system'
import {
  ELEMENT_SIZES,
  ELEMENT_PLACEMENT_HORIZONTAL,
  ELEMENT_PLACEMENT_VERTICAL,
} from '@creation-ui/react/types'
import { AVATAR_VARIANTS } from '@creation-ui/react/components/avatar'
import { ListOrTypes } from 'utils/list-or-types'

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
