import { createContext, ReactNode, useContext } from 'react'
import { DropdownOption } from '../../../types'

interface DropdownContextValue {
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
  setOpen: (value: boolean) => void
}

export const DropdownContext = createContext<DropdownContextValue>({} as any)

export const useDropdown = () => {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error('useDropdown must be used within an AutocompleteProvider')
  }
  return context
}
