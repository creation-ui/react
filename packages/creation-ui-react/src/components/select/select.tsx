import { useTheme } from '../../theme'
import { InputBase } from '../input-base'
import { SelectView } from './select.view'
import { SelectProps } from './types'

export const Select = (props: SelectProps) => {
  const clearableCallback = () => {
    props.onChange?.(null)
  }

  const { size: defaultSize } = useTheme()
  const {
    id,
    helperText,
    error,
    size = defaultSize,
    children,
    onClear = clearableCallback,
    ...rest
  } = props

  const isEmpty = !props.value
  const disabled = props.disabled || props.loading || props.readOnly
  const clearable = !disabled && props.clearable && !isEmpty

  return (
    <InputBase
      id={id}
      disabled={disabled}
      error={error}
      size={size}
      loading={props.loading}
      readOnly={props.readOnly}
      label={props.label}
      required={props.required}
      helperText={helperText}
      clearable={clearable}
      onClear={onClear}
      type='select'
    >
      <SelectView {...rest}>{children}</SelectView>
    </InputBase>
  )
}
