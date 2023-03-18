import { ElementSize } from '../../types'
import { helperTextClasses } from '../../classes'

interface HelperTextProps {
  helperText?: React.ReactNode
  size?: ElementSize
  error?: boolean
}

export const HelperText = ({
  helperText,
  size = 'md',
  error,
}: HelperTextProps) =>
  helperText ? (
    <span className={helperTextClasses({ size, error })}>{helperText}</span>
  ) : null
