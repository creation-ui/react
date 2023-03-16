import { Theme } from '@creation-ui/react'
import clsx from 'clsx'
import React from 'react'
import { useControlComponents } from './use-control-components'

interface PlaygroundProps {
  children?: React.ReactNode
}

const borderColor = 'border-gray-200'

const classes = {
  container: [borderColor, 'grid', 'grid-cols-3', 'border', 'rounded-lg'],
  view: [
    'col-span-2',
    'flex',
    'items-center',
    'place-items-center',
    'p-10',
    'justify-center',
  ],
  controls: [borderColor, 'flex', 'flex-col', 'border-l', 'p-4', 'gap-2'],
  title: ['text-xl', 'font-semibold', 'leading-relaxed'],
}

export const PlaygroundView = ({ children }: PlaygroundProps) => {
  const controlComponents = useControlComponents()

  return (
    <Theme theme={{ size: 'sm' }}>
      <div className={clsx(classes.container)}>
        <div className={clsx(classes.view)}>{children}</div>
        <div className={clsx(classes.controls)}>
          {controlComponents.map((component, index) => (
            <React.Fragment key={index}>{component}</React.Fragment>
          ))}
        </div>
      </div>
    </Theme>
  )
}
