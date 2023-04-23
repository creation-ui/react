import { createContext, ReactNode, useContext } from 'react'
import { DropdownOption } from '../../types'

interface AutocompleteContextValue {
  open: boolean
  multiple: boolean
  clearable: boolean
  floatingContext: any
  options: DropdownOption[]
  activeIndex?: number
  limit?: number
  selected?: DropdownOption[]
  props: {
    input: any
    option: (item: DropdownOption, index: number) => any
    list: any
  }
  text: {
    loading?: ReactNode
    empty?: ReactNode
    notFound?: ReactNode
  }
  handleRemoveSelected: (item: DropdownOption) => void
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
