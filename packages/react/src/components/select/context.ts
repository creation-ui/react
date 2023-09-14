import { createContext, useContext } from 'react'
import { RenderOptionProps, SelectProps } from './types'

interface SelectContextValue<T = any>
  extends Pick<
    SelectProps<T>,
    | 'renderOption'
    | 'renderSelection'
    | 'getOptionLabel'
    | 'clearable'
    | 'options'
    | 'textEmpty'
    | 'value'
  > {
  open?: boolean
  floatingContext: any
  /** PROPS **/
  propsContainer: Record<string, unknown>
  propsList: Record<string, unknown>
  getOptionProps: (option: T, index: number) => RenderOptionProps
}

export const SelectContext = createContext<SelectContextValue>({} as any)

export const useSelect = () => {
  const context = useContext(SelectContext)
  if (!context) {
    throw new Error('useDropdown must be used within an DropdownProvider')
  }
  return context
}
