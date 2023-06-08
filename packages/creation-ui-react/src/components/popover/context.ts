import { createContext, useContext } from 'react'
import { PopoverContextType } from './types'

export const PopoverContext = createContext<PopoverContextType>(null)

export const usePopoverContext = () => {
  const context = useContext(PopoverContext)

  if (context == null) {
    throw new Error('Popover components must be wrapped in <Popover />')
  }

  return context
}

