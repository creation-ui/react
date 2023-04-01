import { useEffect, useRef } from 'react'
import { inputContainer, label, text } from '../../classes'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import { InteractiveContainer } from '../interactive-container'
import { HelperText } from '../typography'
import type { CheckboxProps } from './checkbox.types'
import { checkboxClasses } from './classes'

const Checkbox = (props: CheckboxProps) => {
  const { size: defaultSize } = useTheme()
  const {
    size = defaultSize,
    id,
    className,
    indeterminate,
    checked,
    onChange,
    enableFocusRing,
    error,
    readOnly,
    helperText,
    disabled,
    ...rest
  } = props

  const componentId = useId(id)
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (indeterminate && ref.current) {
      ;(ref.current as any).indeterminate = true
    }
  }, [indeterminate])

  const containerClasses = inputContainer({
    disabled,
    error: !!error,
    layout: 'row',
    className: text({ size }),
  })

  return (
    <InteractiveContainer disabled={disabled} className={className}>
      <div className={containerClasses}>
        <input
          {...rest}
          ref={ref}
          id={componentId}
          type='checkbox'
          onChange={onChange}
          checked={checked}
          disabled={disabled}
          readOnly={readOnly}
          className={checkboxClasses({
            size,
            className,
            error: !!error,
            readOnly,
          })}
        />
        <label
          htmlFor={componentId}
          className={label({ size, required: props.required, for: 'checkbox' })}
          children={props.label}
          aria-label={props.label?.toString()}
        />
      </div>
      <HelperText
        size={size}
        helperText={error || helperText}
        error={Boolean(error)}
      />
    </InteractiveContainer>
  )
}

export default Checkbox
