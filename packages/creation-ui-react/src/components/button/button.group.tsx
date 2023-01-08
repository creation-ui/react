import clsx from 'clsx'
import type { ButtonGroupProps } from './button.types'
// @ts-ignore
import styles from './button-group.module.css'

const ButtonGroup = ({ children, className, ...props }: ButtonGroupProps) => {
  return (
    <div {...props} className={clsx(styles['button-group'], className)}>
      {children}
    </div>
  )
}

export default ButtonGroup
