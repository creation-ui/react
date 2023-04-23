import { createContext, useContext } from 'react'
import { HTMLInputType } from '../../types'

interface InputBaseContextValue {
  componentId: string
  classes: {
    input: string
    container: string
  }
  disabled: boolean
  readOnly: boolean
  type: HTMLInputType
  error: boolean
}

const InputBaseContext = createContext<InputBaseContextValue>({} as any)

const useInputBase = () => {
  const context = useContext(InputBaseContext)
  if (!context) {
    throw new Error('useInputBase must be used within an InputBaseProvider')
  }
  return context
}

export { InputBaseContext, useInputBase }
