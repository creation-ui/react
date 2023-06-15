import { ColorDefinition } from '@components/playground/components/colors-selector'
import { INPUT_TYPES } from '@components/playground/constants'
import { PlaygroundControl } from '@components/playground/types'
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

const POSITION_HORIZONTAL = [
  { value: 'left', label: <Icon path={mdiBorderLeftVariant} size={1} /> },
  { value: 'right', label: <Icon path={mdiBorderRightVariant} size={1} /> },
]
const POSITION_VERTICAL = [
  { value: 'top', label: <Icon path={mdiBorderTopVariant} size={1} /> },
  { value: 'bottom', label: <Icon path={mdiBorderBottomVariant} size={1} /> },
]

const INPUT_TYPES_DROPDOWN = INPUT_TYPES

export const childrenControl: PlaygroundControl = {
  name: 'children',
  type: 'string',
  defaultValue: 'Button',
}

export const sizeControl: PlaygroundControl = {
  name: 'size',
  type: 'array',
  defaultValue: 'md',
  values: SIZES,
}

export const positionControl: PlaygroundControl = {
  name: 'position',
  type: 'array',
  defaultValue: 'right',
  values: POSITION,
}
export const positionHorizontalControl: PlaygroundControl = {
  name: 'horizontal',
  label: 'Position Horizontal',
  type: 'array',
  defaultValue: 'right',
  values: POSITION_HORIZONTAL,
}
export const positionVerticalControl: PlaygroundControl = {
  name: 'vertical',
  label: 'Position Vertical',
  type: 'array',
  defaultValue: 'top',
  values: POSITION_VERTICAL,
}

export const loadingControl: PlaygroundControl = {
  name: 'loading',
  type: 'boolean',
}

export const variantControl: PlaygroundControl = {
  name: 'variant',
  type: 'array',
  defaultValue: 'contained',
  values: VARIANTS,
}

export const statusControl: PlaygroundControl = {
  name: 'status',
  type: 'array',
  defaultValue: 'primary',
  component: 'colors',
  values: COLORS,
}

export const disabledControl: PlaygroundControl = {
  name: 'disabled',
  type: 'boolean',
}
export const readOnlyControl: PlaygroundControl = {
  name: 'readOnly',
  type: 'boolean',
}

export const fullWidthControl: PlaygroundControl = {
  name: 'fullWidth',
  label: 'Full Width',
  type: 'boolean',
}
export const clearableControl: PlaygroundControl = {
  name: 'clearable',
  type: 'boolean',
}
export const errorControl: PlaygroundControl = {
  name: 'error',
  type: 'boolean',
}

export const helperTextControl: PlaygroundControl = {
  name: 'helperText',
  type: 'string',
  label: 'Helper Text',
  defaultValue: 'This is helper text',
}

export const labelControl: PlaygroundControl = {
  name: 'label',
  type: 'string',
  defaultValue: 'Label',
}
