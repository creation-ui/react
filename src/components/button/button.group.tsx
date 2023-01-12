import clsx from 'clsx'
import type { ButtonGroupProps } from './button.types'

const ButtonGroup = ({ children, className, ...props }: ButtonGroupProps) => {
  return (
    <div {...props} className={clsx('button-group', className)}>
      <style>
        {`
        .button-group {
          display: inline-flex;
        }

        .button-group > button:not(:first-child):not(:last-child) {
          border-radius: 0;
          border-left: none;
        }

        .button-group > button:first-child {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }

        .button-group > button:last-child {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-left: none;
        }

        `}
      </style>
      {children}
    </div>
  )
}

export default ButtonGroup
