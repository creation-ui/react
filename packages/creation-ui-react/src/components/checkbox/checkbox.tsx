import { useTheme } from '../../theme'
import { InputBaseInline } from '../input-base'
import { CheckboxProps } from './checkbox.types'
import { CheckboxView } from './checkbox.view'

const Checkbox = (props: CheckboxProps) => {
  const { size: defaultSize } = useTheme()
  const { size = defaultSize, ...rest } = props

  return (
    <InputBaseInline {...rest} size={size} type={'checkbox'} layout='row'>
      <CheckboxView {...rest} size={size} />
    </InputBaseInline>
  )
}

Checkbox.displayName = 'Checkbox'

export default Checkbox
