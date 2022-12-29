import clsx from 'clsx'
import { ButtonGroupProps } from './button.types'
// import './button-group.scss'

const ButtonGroup = ({ children, className, ...props }: ButtonGroupProps) => {
  return (
    <div {...props} className={clsx('button-group', className)}>
      {children}
    </div>
  )
}

export default ButtonGroup
