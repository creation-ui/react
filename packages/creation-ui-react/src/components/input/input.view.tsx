import type { Ref } from 'react'
import { forwardRef } from 'react'
import { useInputBase } from '../input-base/input-base.context'
import { InputProps } from './input.types'

export const InputView = forwardRef(
  (props: Omit<InputProps, 'size'>, ref: Ref<HTMLInputElement>) => {
    const { componentId, classes, readOnly, error, type, disabled } =
      useInputBase()

    return (
      <input
        ref={ref}
        id={componentId}
        className={classes.input}
        type={type}
        disabled={disabled}
        aria-invalid={error}
        aria-readonly={readOnly}
        readOnly={readOnly}
        {...props}
      />
    )
  }
)
