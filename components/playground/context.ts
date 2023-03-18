import {
  ElementColor,
  ElementSize,
  ElementStatus,
  ElementVariant,
} from '@creation-ui/react'
import { createContext, useContext } from 'react'

export interface PlaygroundContextValue {
  state: {
    size?: ElementSize
    color?: ElementColor
    variant?: ElementVariant
    content?: string
    status?: ElementStatus
    loading?: boolean
    error?: boolean
    helperText?: string
    disabled?: boolean
    readOnly?: boolean
    clearable?: boolean
    required?: boolean
  }
  config: {
    readOnly?: boolean
    required?: boolean
    disabled?: boolean
    size?: boolean
    color?: boolean
    variant?: boolean
    content?: boolean
    loading?: boolean
    error?: boolean
    status?: boolean
    helperText?: boolean
    clearable?: boolean
  }
  handleChangeUpdate: (
    key: keyof PlaygroundContextValue['state']
  ) => (value: PlaygroundContextValue['state'][typeof key]) => void
}

export const PlaygroundContext = createContext<PlaygroundContextValue>(
  {} as any
)

export const usePlayground = () => {
  const context = useContext(PlaygroundContext)

  if (!context) {
    throw new Error(`"PlaygroundProvider" must be present in React DOM tree`)
  }

  return context
}
