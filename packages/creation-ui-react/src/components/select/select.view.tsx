import { twMerge } from 'tailwind-merge'
import { useInputBase } from '../input-base/input-base.context'
import { SelectViewProps } from './types'

export const SelectView = ({
  children,
  className,
  clearable,
  ...rest
}: SelectViewProps) => {
  const { classes, componentId } = useInputBase()

  return (
    <select
      id={componentId}
      className={twMerge(classes.input, clearable && 'mr-3', className)}
      {...rest}
    >
      {children}
    </select>
  )
}
