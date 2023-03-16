import React, { useState } from 'react'

import { PlaygroundContext, PlaygroundContextValue } from './context'
import { PlaygroundView } from './view'

export interface PlaygroundControllerProps {
  children?: React.ReactNode
  config: PlaygroundContextValue['config']
}

export const PlaygroundController: React.FC<PlaygroundControllerProps> = ({
  children,
  config,
}) => {
  const [state, setState] = useState<PlaygroundContextValue['state']>({
    color: 'primary',
    size: 'md',
    variant: 'contained',
    content: '',
    loading: false,
    state: 'default',
    status: undefined,
  })

  const handleChangeUpdate = (key: keyof PlaygroundContextValue['state']) => {
    return (value: PlaygroundContextValue['state'][typeof key]) => {
      setState(prevState => ({
        ...prevState,
        [key]: value,
      }))
    }
  }

  return (
    <PlaygroundContext.Provider
      value={{
        config,
        state,
        handleChangeUpdate,
      }}
    >
      <PlaygroundView>{children}</PlaygroundView>
    </PlaygroundContext.Provider>
  )
}
