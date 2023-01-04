import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { CheckboxProps } from './checkbox.types'
import { checkbox } from './classes'
import { label, text, input, shared, inputContainer } from '../../classes'

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
    ...rest
  } = props
  const [isChecked, setChecked] = useState(checked)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    onChange?.(e)
  }

  const componentId = useId(id)
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (indeterminate && ref.current) {
      ;(ref.current as any).indeterminate = true
    }
  }, [indeterminate])

  const disabled = props.disabled || props.readOnly

  const containerClasses = clsx(
    inputContainer({ disabled, error: !!error, layout: 'row' }),
    text({ size })
  )

  return (
    <div className={containerClasses}>
      <input
        ref={ref}
        id={componentId}
        disabled={disabled}
        type='checkbox'
        onChange={handleChange}
        className={checkbox({ size, className })}
        checked={isChecked}
        {...rest}
      />
      <label
        htmlFor={componentId}
        className={label({ size, required: props.required, for: 'checkbox' })}
        children={props.label}
        aria-label={props.label?.toString()}
      />
    </div>
  )
}

export default Checkbox
