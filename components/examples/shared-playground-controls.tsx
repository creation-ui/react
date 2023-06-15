import { ColorDefinition } from '@components/playground/components/colors-selector'
import { INPUT_TYPES } from '@components/playground/constants'
import { PlaygroundProperty } from '@components/playground/types'
import {
  mdiAlphabetical,
  mdiBorderBottomVariant,
  mdiBorderLeftVariant,
  mdiBorderRightVariant,
  mdiBorderTopVariant,
  mdiSetLeft,
  mdiSetLeftRight,
  mdiSetNone,
  mdiSetRight,
  mdiSizeL,
  mdiSizeM,
  mdiSizeS,
  mdiSquareRounded,
  mdiSquareRoundedOutline,
} from '@mdi/js'
import { Icon } from '@mdi/react'

const SIZES = [
  { value: 'sm', label: <Icon path={mdiSizeS} size={1} /> },
  {
    value: 'md',
    label: <Icon path={mdiSizeM} size={1} />,
  },
  { value: 'lg', label: <Icon path={mdiSizeL} size={1} /> },
]

const VARIANTS = [
  { value: 'contained', label: <Icon path={mdiSquareRounded} size={1} /> },
  {
    value: 'outlined',
    label: <Icon path={mdiSquareRoundedOutline} size={1} />,
  },
  { value: 'text', label: <Icon path={mdiAlphabetical} size={1} /> },
]

const COLORS: ColorDefinition[] = [
  { value: 'primary', label: 'primary', className: 'bg-primary-500' },
  { value: 'success', label: 'success', className: 'bg-success-500' },
  { value: 'warning', label: 'warning', className: 'bg-warning-500' },
  { value: 'error', label: 'error', className: 'bg-error-500' },
  { value: 'info', label: 'info', className: 'bg-info-500' },
]

const ICON = [
  { value: 'left', label: <Icon path={mdiSetLeft} size={1} /> },
  { value: 'right', label: <Icon path={mdiSetRight} size={1} /> },
  { value: 'both', label: <Icon path={mdiSetLeftRight} size={1} /> },
  { value: 'none', label: <Icon path={mdiSetNone} size={1} /> },
]
const POSITION = [
  { value: 'top', label: <Icon path={mdiBorderTopVariant} size={1} /> },
  { value: 'left', label: <Icon path={mdiBorderLeftVariant} size={1} /> },
  { value: 'right', label: <Icon path={mdiBorderRightVariant} size={1} /> },
  { value: 'bottom', label: <Icon path={mdiBorderBottomVariant} size={1} /> },
]

const INPUT_TYPES_DROPDOWN = INPUT_TYPES

export const childrenControl: PlaygroundProperty = {
  name: 'children',
  type: 'string',
  defaultValue: 'Button',
}

export const sizeControl: PlaygroundProperty = {
  name: 'size',
  type: 'array',
  defaultValue: 'md',
  values: SIZES,
}

export const positionControl: PlaygroundProperty = {
  name: 'position',
  type: 'array',
  defaultValue: 'right',
  values: POSITION,
}

export const loadingControl: PlaygroundProperty = {
  name: 'loading',
  type: 'boolean',
}

export const variantControl: PlaygroundProperty = {
  name: 'variant',
  type: 'array',
  defaultValue: 'contained',
  values: VARIANTS,
}

export const statusControl: PlaygroundProperty = {
  name: 'status',
  type: 'array',
  defaultValue: 'primary',
  controls: 'colors',
  values: COLORS,
}

export const disabledControl: PlaygroundProperty = {
  name: 'disabled',
  type: 'boolean',
}
export const readOnlyControl: PlaygroundProperty = {
  name: 'readOnly',
  type: 'boolean',
}

export const fullWidthControl: PlaygroundProperty = {
  name: 'fullWidth',
  label: 'Full Width',
  type: 'boolean',
}
export const clearableControl: PlaygroundProperty = {
  name: 'clearable',
  type: 'boolean',
}
export const errorControl: PlaygroundProperty = {
  name: 'error',
  type: 'boolean',
}

export const helperTextControl: PlaygroundProperty = {
  name: 'helperText',
  type: 'string',
  label: 'Helper Text',
  defaultValue: 'This is helper text',
}

export const labelControl: PlaygroundProperty = {
  name: 'label',
  type: 'string',
  defaultValue: 'Label',
}
