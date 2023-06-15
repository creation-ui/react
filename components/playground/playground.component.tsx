import clsx from 'clsx'
import { FC } from 'react'
import { classes } from './classes'
import { usePlayground } from './context/context'

interface PlaygroundComponentProps {
  children?: React.ReactNode
}

export const PlaygroundComponent: FC<PlaygroundComponentProps> = () => {
  const { componentProps, component: Component, state } = usePlayground()
  return (
    <div className={clsx(classes.view)}>
      <Component {...componentProps} {...state} />
    </div>
  )
}
