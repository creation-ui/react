import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import type { CheckboxProps } from './checkbox.types'
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const containerClasses = inputContainer({
    disabled,
    error: !!error,
    layout: 'row',
    className: text({ size }),
  })

  return (
    <div className={containerClasses}>
      <input
        ref={ref}
        id={componentId}
        disabled={disabled}
        type='checkbox'
        onChange={handleChange}
        className={checkbox({ size, className })}
        checked={checked}
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
