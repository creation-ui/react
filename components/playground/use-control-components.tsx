import { Input, Select, Switch, ToggleGroup } from '@creation-ui/react'
import {
  mdiAlphabetical,
  mdiSizeL,
  mdiSizeM,
  mdiSizeS,
  mdiSquareRounded,
  mdiSquareRoundedOutline,
  mdiSetRight,
  mdiSetLeft,
  mdiSetLeftRight,
  mdiSetNone,
} from '@mdi/js'
import { Icon } from '@mdi/react'
import { ColorDefinition, ColorsSelector } from './components/colors-selector'
import { INPUT_TYPES } from './constants'
import { usePlayground } from './context'

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

export const useControlComponents = () => {
  const { state, config, handleChangeUpdate } = usePlayground()
  const {
    loading,
    size,
    helperText,
    variant,
    content,
    status,
    error,
    disabled,
    required,
    clearable,
    readOnly,
    uppercase,
    circle,
    inputType,
  } = state

  const components: any[] = []

  config.loading &&
    components.push(
      <Switch
        label='Loading'
        checked={loading}
        onChange={handleChangeUpdate('loading')}
      />
    )

  config.disabled &&
    components.push(
      <Switch
        label='Disabled'
        checked={disabled}
        onChange={handleChangeUpdate('disabled')}
      />
    )
  config.required &&
    components.push(
      <Switch
        label='Required'
        checked={required}
        onChange={handleChangeUpdate('required')}
      />
    )
  config.circle &&
    components.push(
      <Switch
        label='Circle'
        checked={circle}
        onChange={handleChangeUpdate('circle')}
      />
    )
  config.readOnly &&
    components.push(
      <Switch
        label='Read only'
        checked={readOnly}
        onChange={handleChangeUpdate('readOnly')}
      />
    )
  config.clearable &&
    components.push(
      <Switch
        label='Clearable'
        checked={clearable}
        onChange={handleChangeUpdate('clearable')}
      />
    )

  config.error &&
    components.push(
      <Switch
        label='Error'
        checked={!!error}
        onChange={value =>
          value
            ? handleChangeUpdate('error')('There was an error')
            : handleChangeUpdate('error')('')
        }
      />
    )
  config.uppercase &&
    components.push(
      <Switch
        label='Uppercase'
        checked={uppercase}
        onChange={handleChangeUpdate('uppercase')}
      />
    )
  config.fullWidth &&
    components.push(
      <Switch
        label='Full width'
        checked={state.fullWidth}
        onChange={handleChangeUpdate('fullWidth')}
      />
    )

  /** END OF BOOLEANS */

  config.size &&
    components.push(
      <ToggleGroup
        value={size}
        options={SIZES}
        label='Size'
        onChange={handleChangeUpdate('size') as any}
      />
    )

  config.variant &&
    components.push(
      <ToggleGroup
        label='Variant'
        value={variant}
        onChange={handleChangeUpdate('variant') as any}
        options={VARIANTS}
      />
    )
  config.icon &&
    components.push(
      <ToggleGroup
        label='Icon'
        value={state.icon}
        onChange={handleChangeUpdate('icon') as any}
        options={ICON}
      />
    )

  config.status &&
    components.push(
      <ColorsSelector
        label='Status'
        value={status}
        onClick={handleChangeUpdate('status')}
        options={COLORS}
      />
    )

  config.helperText &&
    components.push(
      <Input
        label='Helper text'
        value={helperText}
        onChange={e => handleChangeUpdate('helperText')(e?.target.value)}
      />
    )

  config.content &&
    components.push(
      <Input
        label='Content'
        value={content}
        onChange={e => handleChangeUpdate('content')(e.target.value)}
      />
    )
  config.inputType &&
    components.push(
      <Select
        label='Type'
        value={inputType}
        options={INPUT_TYPES}
        onChange={e => handleChangeUpdate('inputType')(e)}
      />
    )

  return components
}
