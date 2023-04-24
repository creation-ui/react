import { createContext, ReactNode, useContext } from 'react'
import { DropdownOption } from '../../../types'
import { OptionComponentType } from './option'
import { SelectedOptionType } from './selected-option'

interface DropdownContextValue {
  open?: boolean
  multiple?: boolean
  clearable?: boolean
  floatingContext: any
  options: DropdownOption[]
  activeIndex: number | null
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
    placeholder?: ReactNode
  }
  handleRemoveSelected: (item: DropdownOption) => void
  setOpen: (value: boolean) => void
  optionComponent: OptionComponentType
  selectedOptionComponent: SelectedOptionType
}

export const DropdownContext = createContext<DropdownContextValue>({} as any)

export const useDropdown = () => {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error('useDropdown must be used within an AutocompleteProvider')
  }
  return context
}
