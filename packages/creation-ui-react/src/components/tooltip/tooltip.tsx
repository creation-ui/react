import clsx from 'clsx'
import { TooltipProps } from './tooltip.types'

const Tooltip = (props: TooltipProps) => {
  const { className, position = 'top', children, content, ...rest } = props

  return (
    <div className={clsx('tooltip--wrapper group')}>
      <div
        {...props}
        className={clsx('tooltip', `tooltip--${position}`, className)}
      >
        {content}
      </div>
      {children}
    </div>
  )
}

export default Tooltip
