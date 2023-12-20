import clsx from 'clsx'
import { getWidthClasses } from '../utils'
import { interactiveContainerClasses } from './classes'

interface InteractiveContainerProps {
  disabled?: boolean
  children?: React.ReactNode
  className?: string | string[]
}

export const InteractiveContainer = ({
  className,
  disabled,
  children,
}: InteractiveContainerProps) => {
  const classes = clsx(className)?.split(' ')
  const widthClasses = getWidthClasses(classes)

  return (
    <div
      className={interactiveContainerClasses({
        disabled,
        className: [widthClasses],
      })}
      data-testid='cui-interactive-container'
    >
      {children}
    </div>
  )
}

InteractiveContainer.displayName = 'InteractiveContainer'
