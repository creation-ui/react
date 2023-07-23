import { createContext, ReactNode, useContext } from 'react'
import { DropdownOptionType, DropdownProps } from '../../../types'

interface DropdownContextValue {
  open?: boolean
  multiple?: boolean
  clearable?: boolean
  floatingContext: any
  options: DropdownOptionType[]
  activeIndex: number | null
  limit?: number
  selected?: null | DropdownOptionType | DropdownOptionType[]
  props: {
    input: any
    option: (item: DropdownOptionType, index: number) => any
    list: any
  }
  text: {
    loading?: ReactNode
    empty?: ReactNode
    notFound?: ReactNode
    placeholder?: ReactNode
  }
  handleRemoveSelected: (item: DropdownOptionType) => void
  setOpen: (value: boolean) => void
  optionComponent: DropdownProps['optionComponent']
  selectedOptionComponent: DropdownProps['selectedOptionComponent']
}

export const DropdownContext = createContext<DropdownContextValue>({} as any)

export const useDropdown = () => {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error('useDropdown must be used within an DropdownProvider')
  }
  return context
}
