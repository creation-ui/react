import {
  ELEMENT_SIZES,
  ELEMENT_STATUS,
  ELEMENT_VARIANTS,
  ElementColor,
  Input,
  Select,
  Switch,
  ToggleGroup,
} from '@creation-ui/react'
import { usePlayground } from './context'
import { ColorsSelector } from './components/colors-selector'

const mapEnum = (value: string) => ({ value: value, label: value })

const SIZES = ELEMENT_SIZES.map(mapEnum)
const VARIANTS = ELEMENT_VARIANTS.map(mapEnum)
const STATUSES = ELEMENT_STATUS.map(mapEnum)
const COLORS: Array<{ value: string; label: ElementColor }> = [
  { value: 'bg-primary-500', label: 'primary' },
  { value: 'bg-success-500', label: 'success' },
  { value: 'bg-warning-500', label: 'warning' },
  { value: 'bg-error-500', label: 'error' },
]

export const useControlComponents = () => {
  const {
    state: {
      loading,
      size,
      color,
      helperText,
      variant,
      content,
      status,
      error,
      disabled,
    },
    config,
    handleChangeUpdate,
  } = usePlayground()

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

  config.size &&
    components.push(
      <ToggleGroup
        value={size}
        options={SIZES}
        label='Size'
        onChange={handleChangeUpdate('size') as any}
      />
    )

  config.color &&
    components.push(
      <ColorsSelector
        label='Color'
        value={color}
        onClick={handleChangeUpdate('color')}
        options={COLORS}
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

  config.status &&
    components.push(
      <Select
        label='Status'
        value={status}
        onChange={handleChangeUpdate('status')}
        options={STATUSES}
      />
    )

  config.error &&
    components.push(
      <Input
        label='Error text'
        value={error}
        onChange={e => handleChangeUpdate('error')(e?.target.value)}
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

  return components
}
