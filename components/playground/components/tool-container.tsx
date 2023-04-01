import { ElementSize, useTheme } from '@creation-ui/react'
import {
  inputContainer,
  label as labelClasses,
  text,
} from '@creation-ui/react/classes'
import clsx from 'clsx'
import { ReactNode, useId } from 'react'

interface ToolContainerProps {
  children?: ReactNode
  label: ReactNode
  size?: ElementSize
}

export const ToolContainer = (props: ToolContainerProps) => {
  const componentId = useId()

  const { size: defaultSize } = useTheme()

  const { size = defaultSize, label } = props

  const containerClasses = clsx(inputContainer(), text({ size }))
  return (
    <div className={containerClasses}>
      <label
        htmlFor={componentId}
        className={labelClasses({ size })}
        aria-label={label?.toString()}
      >
        {label}
      </label>
      <div className='flex gap-3 w-fit'>{props.children}</div>
    </div>
  )
}
