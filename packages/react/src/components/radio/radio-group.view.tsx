import { useInputBase } from '../input-base/input-base.context'
import type { RadioGroupProps } from './types'

export const RadioGroupComponentView = ({
  children,
}: Pick<RadioGroupProps, 'children'>) => {
  const { disabled, readOnly, classes } = useInputBase()

  return (
    <div
      aria-disabled={disabled}
      aria-readonly={readOnly}
      className={classes.container}
    >
      <div className={'flex flex-col gap-2'}>{children}</div>
    </div>
  )
}
