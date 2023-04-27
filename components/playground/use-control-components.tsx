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
  mdiBorderBottomVariant,
  mdiBorderTopVariant,
  mdiBorderLeftVariant,
  mdiBorderRightVariant,
} from '@mdi/js'
import { Icon } from '@mdi/react'
import { ColorDefinition, ColorsSelector } from './components/colors-selector'
import { ToolContainer } from './components/tool-container'
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
const POSITION = [
  { value: 'top', label: <Icon path={mdiBorderTopVariant} size={1} /> },
  { value: 'left', label: <Icon path={mdiBorderLeftVariant} size={1} /> },
  { value: 'right', label: <Icon path={mdiBorderRightVariant} size={1} /> },
  { value: 'bottom', label: <Icon path={mdiBorderBottomVariant} size={1} /> },
]

const INPUT_TYPES_DROPDOWN = INPUT_TYPES

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
      <ToolContainer label='Size'>
        <ToggleGroup
          value={size}
          options={SIZES}
          onChange={handleChangeUpdate('size') as any}
        />
      </ToolContainer>
    )

  config.variant &&
    components.push(
      <ToolContainer label='Variant'>
        <ToggleGroup
          value={variant}
          onChange={handleChangeUpdate('variant') as any}
          options={VARIANTS}
        />
      </ToolContainer>
    )
  config.icon &&
    components.push(
      <ToolContainer label='Icon'>
        <ToggleGroup
          value={state.icon}
          onChange={handleChangeUpdate('icon') as any}
          options={ICON}
        />
      </ToolContainer>
    )
  config.position &&
    components.push(
      <ToolContainer label='Position'>
        <ToggleGroup
          value={state.position}
          onChange={handleChangeUpdate('position') as any}
          options={POSITION}
        />
      </ToolContainer>
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
        value={inputType as any}
        options={INPUT_TYPES_DROPDOWN as any}
        onChange={e => handleChangeUpdate('inputType')(e as any)}
      />
    )

  return components
}
