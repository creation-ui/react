import type { Ref } from 'react'
import { forwardRef } from 'react'
import { useTheme } from '../../theme'
import { InputBase } from '../input-base'
import type { InputProps } from './input.types'
import { InputView } from './input.view'

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref: Ref<HTMLInputElement>) => {
    const { size: defaultSize } = useTheme()
    const { size = defaultSize, type = 'text', ...rest } = props

    return (
      <InputBase {...rest} size={size} type={type}>
        <InputView {...rest} ref={ref} />
      </InputBase>
    )
  }
)

Input.displayName = 'Input'

export default Input
