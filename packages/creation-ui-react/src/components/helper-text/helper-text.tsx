import { ElementSize } from '../../types'
import { helperTextClasses } from '../../classes'

interface HelperTextProps {
  helperText?: string
  size: ElementSize
}

export const HelperText = ({ helperText, size }) => {
  return helperText ? (
    <div className={helperTextClasses({ size })}>{helperText}</div>
  ) : null
}
