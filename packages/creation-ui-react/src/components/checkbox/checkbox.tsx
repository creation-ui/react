import { useId } from '@hooks'
import { useTheme } from '@theme'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { CheckboxProps } from './checkbox.types'

const Checkbox = (props: CheckboxProps) => {
  const { size: defaultSize } = useTheme()
  const {
    size = defaultSize,
    id,
    label,
    disabled,
    className,
    indeterminate,
    checked,
    onChange,
    enableFocusRing,
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

  return (
    <div className={clsx(`text-size--${size}`, 'form-element--wrapper-row')}>
      <input
        ref={ref}
        id={componentId}
        disabled={disabled}
        type='checkbox'
        onChange={handleChange}
        className={clsx(
          'peer',
          'form-element--checkbox',
          `form-element--checkbox-${size}`,
          className
        )}
        checked={isChecked}
        {...rest}
      />
      <label
        htmlFor={componentId}
        className={clsx('form-element--label', 'form-element--label--checkbox')}
      >
        {label}
      </label>
    </div>
  )
}

export default Checkbox
