import { twMerge } from 'tailwind-merge'
import { useInputBase } from '../input-base/input-base.context'
import { SelectViewProps } from './types'

export const SelectView = ({
  children,
  className,
  ...rest
}: SelectViewProps) => {
  const { classes, componentId } = useInputBase()

  return (
    <select
      id={componentId}
      className={twMerge(classes.input, 'outline-none', className)}
      {...rest}
    >
      {children}
    </select>
  )
}
