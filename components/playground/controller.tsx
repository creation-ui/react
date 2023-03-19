import React, { useState } from 'react'

import { PlaygroundContext, PlaygroundContextValue } from './context'
import { PlaygroundView } from './view'
import { createInitialState } from './helpers'

export interface PlaygroundControllerProps {
  children?: React.ReactNode
  config: PlaygroundContextValue['config']
}

export const PlaygroundController: React.FC<PlaygroundControllerProps> = ({
  children,
  config,
}) => {
  const [state, setState] = useState<PlaygroundContextValue['state']>(
    createInitialState(config)
  )

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
