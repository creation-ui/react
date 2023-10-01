import { useTheme } from '../../theme'
import { InputBase } from '../input-base'
import { RadioGroupComponentView } from './radio-group.view'
import type { RadioGroupProps } from './types'

const RadioGroupComponent = ({ children, ...props }: RadioGroupProps) => {
  const { size: defaultSize } = useTheme()
  const { size = defaultSize, ...rest } = props

  return (
    <InputBase {...rest} size={size}>
      <RadioGroupComponentView>{children}</RadioGroupComponentView>
    </InputBase>
  )
}

export default RadioGroupComponent
