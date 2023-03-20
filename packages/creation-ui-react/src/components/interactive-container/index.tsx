import clsx from 'clsx'
import { interactiveContainerClasses } from './classes'

interface InteractiveContainerProps {
  disabled?: boolean
  children?: React.ReactNode
  className?: string | string[]
}

export const InteractiveContainer = ({
  className,
  ...props
}: InteractiveContainerProps) => {
  const classes = clsx(className)?.split(' ')
  // pick only tailwind width classes
  const widthClasses = classes?.filter(c => /^w-[\w-[\]]+$/.test(c))

  return (
    <div
      className={interactiveContainerClasses({
        ...props,
        className: widthClasses,
      })}
    >
      {props.children}
    </div>
  )
}

InteractiveContainer.displayName = 'InteractiveContainer'
