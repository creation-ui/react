import type {
  BaseComponentProps,
  ElementSize,
  ElementStatus,
} from '@creation-ui/core'
import { inputContainer, label as labelClasses, text } from '@creation-ui/core'
import { useTheme } from '@creation-ui/react/theme'
import { capitalize } from '@utils/list-or-types'
import clsx from 'clsx'
import { useId } from 'react'

export type ColorDefinition = {
  label: ElementStatus
  value: ElementStatus
  className: string
}

interface ColorsSelectorProps extends BaseComponentProps {
  options: ColorDefinition[]
  onClick: (value: string | boolean | undefined) => void
  label: string
  value?: string
  size?: ElementSize
}

export const ColorsSelector = ({
  options,
  onClick,
  label,
  value,
  ...props
}: ColorsSelectorProps) => {
  const componentId = useId()

  const { size: defaultSize } = useTheme()
  const { size = defaultSize, required, readOnly, error } = props

  const disabled = props.disabled || readOnly
  const containerClasses = clsx(
    inputContainer({ disabled, error: !!error }),
    text({ size }),
  )
  return (
    <div className={containerClasses}>
      <label
        htmlFor={componentId}
        className={labelClasses({ size, required: props.required })}
        aria-label={label?.toString()}
      >
        {label}
      </label>
      <div className='flex gap-3 w-fit' aria-required={required}>
        {options.map(o => (
          <div
            key={o.value}
            title={capitalize(o.label)}
            onClick={onClick.bind(null, o.value)}
            className={clsx([
              'transform',
              'transition-transform',
              o.className,
              'h-6',
              'w-6',
              'rounded',
              'cursor-pointer',
              value === o.value && 'scale-125',
            ])}
          />
        ))}
      </div>
    </div>
  )
}
