import { forwardRef } from 'react'
import { useTheme } from '../../theme'
import { InputBase } from '../input-base'
import type { InputProps } from './input.types'
import { InputView } from './input.view'

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { size: defaultSize } = useTheme()
  const {
    size = defaultSize,
    type = 'text',
    variant = 'outlined',
    ...rest
  } = props

  return (
    <InputBase {...rest} size={size} type={type} variant={variant} ref={ref}>
      <InputView {...rest} ref={ref} variant={variant} />
    </InputBase>
  )
})

Input.displayName = 'Input'

export default Input
