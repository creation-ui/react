import React, { useEffect, useState } from 'react'

import { PlaygroundContext } from './context/context'
import { PlaygroundCode } from './playground.code'
import { PlaygroundComponent } from './playground.component'
import { PlaygroundControls } from './playground.controls'
import { PlaygroundView } from './playground.view'
import { PlaygroundState, PlaygroundControllerProps } from './types'

export const PlaygroundController: React.FC<
  PlaygroundControllerProps
> = props => {
  const { showCode = true, properties } = props

  const [state, setState] = useState<PlaygroundState>({})

  const handleChange = (name: string, value: any) => {
    setState({ ...state, [name]: value })
  }

  const listOfValues = properties?.map(
    ({ name, defaultValue, values, type }) => {
      return {
        name,
        defaultValue,
        values,
        type,
      }
    }
  )

  useEffect(() => {
    const newState = listOfValues?.reduce(
      (acc, { type, name, defaultValue, values }) => {
        const [first] = values ?? []
        const fallback =
          type === 'boolean'
            ? false
            : type === 'string'
            ? ''
            : type === 'array'
            ? first.value
            : null

        return { ...acc, [name]: defaultValue ?? fallback }
      },
      {}
    )

    setState(newState)
  }, [])

  return (
    <PlaygroundContext.Provider value={{ ...props, state, handleChange }}>
      <PlaygroundView>
        <PlaygroundComponent />
        <PlaygroundControls />
        <PlaygroundCode visible={showCode} />
      </PlaygroundView>
    </PlaygroundContext.Provider>
  )
}
