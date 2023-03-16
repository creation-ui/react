import clsx from 'clsx'
import { useId } from 'react'
import {
  inputContainer,
  label as labelClasses,
  text,
} from '@creation-ui/react/classes'
import { BaseComponentProps, ElementSize } from '@creation-ui/react/types'
import { useTheme } from '@creation-ui/react/theme'
import { capitalize } from '@utils/list-or-types'

type ColorDefinition = {
  label: string
  // tailwind color className
  value: string
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
    text({ size })
  )
  return (
    <div className={containerClasses}>
      <label
        htmlFor={componentId}
        className={labelClasses({ size, required: props.required })}
        children={label}
        aria-label={label?.toString()}
      />
      <div className='flex gap-3 w-fit' aria-required={required}>
        {options.map(o => (
          <div
            key={o.value}
            title={capitalize(o.label)}
            onClick={onClick.bind(null, o.value)}
            className={clsx([
              'transform',
              'transition-transform',

              o.value,
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
