import { createContext, ReactNode, useContext } from 'react'
import { SelectOptionsType } from '../../types'

interface AutocompleteContextValue {
  open: boolean
  multiple: boolean
  clearable: boolean
  floatingContext: any
  options: SelectOptionsType[]
  activeIndex?: number
  limit?: number
  selected?: SelectOptionsType[]
  props: {
    input: any
    option: (item: SelectOptionsType, index: number) => any
    list: any
  }
  text: {
    loading?: ReactNode
    empty?: ReactNode
    notFound?: ReactNode
  }
  handleRemoveSelected: (item: SelectOptionsType) => void
}

const AutocompleteContext = createContext<AutocompleteContextValue>({} as any)

const useAutocomplete = () => {
  const context = useContext(AutocompleteContext)
  if (!context) {
    throw new Error(
      'useAutocomplete must be used within an AutocompleteProvider'
    )
  }
  return context
}

export { AutocompleteContext, useAutocomplete }
