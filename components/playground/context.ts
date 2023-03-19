import { ElementSize, ElementStatus, ElementVariant } from '@creation-ui/react'
import { createContext, useContext } from 'react'

export type IconConfig = 'left' | 'right' | 'none' | 'both'

type PlaygroundConfig = {
  readOnly?: boolean
  required?: boolean
  disabled?: boolean
  size?: boolean
  variant?: boolean
  content?: boolean
  loading?: boolean
  error?: boolean
  status?: boolean
  helperText?: boolean
  clearable?: boolean
  uppercase?: boolean
  fullWidth?: boolean
  icon?: boolean
  circle?: boolean
}

type PlaygroundValue = {
  circle?: boolean
  uppercase?: boolean
  size?: ElementSize
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
  fullWidth?: boolean
  icon?: IconConfig
}

export interface PlaygroundContextValue {
  state: PlaygroundValue
  config: PlaygroundConfig
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