import { createContext, ReactNode, useContext } from 'react'
import { DropdownOption, DropdownProps } from '../../../types'

interface DropdownContextValue {
  open?: boolean
  multiple?: boolean
  clearable?: boolean
  floatingContext: any
  options: DropdownOption[]
  activeIndex: number | null
  limit?: number
  selected?: null | DropdownOption | DropdownOption[]
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
  optionComponent: DropdownProps['optionComponent']
  selectedOptionComponent: DropdownProps['selectedOptionComponent']
}

export const DropdownContext = createContext<DropdownContextValue>({} as any)

export const useDropdown = () => {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error('useDropdown must be used within an AutocompleteProvider')
  }
  return context
}
