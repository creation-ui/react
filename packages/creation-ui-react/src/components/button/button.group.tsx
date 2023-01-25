import clsx from 'clsx'
import type { ButtonGroupProps } from './button.types'

const ButtonGroup = ({ children, className, ...props }: ButtonGroupProps) => {
  return (
    <div {...props} className={clsx('button-group', className)}>
      {children}
    </div>
  )
}

export default ButtonGroup
