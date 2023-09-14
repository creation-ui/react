import { createContext, useContext } from 'react'
import {
  AutocompleteOptionProps,
  AutocompleteOptionDefault,
  AutocompleteProps,
} from './types'

interface AutocompleteContextValue<T = any>
  extends Pick<
    AutocompleteProps<T>,
    | 'renderOption'
    | 'renderSelection'
    | 'getOptionLabel'
    | 'getLimitTagsText'
    | 'renderTags'
    | 'multiple'
    | 'clearable'
    | 'limit'
    | 'options'
    | 'placeholder'
    | 'textLoading'
    | 'textEmpty'
    | 'textNotFound'
    | 'defaultTagProps'
    | 'autoHighlight'
  > {
  open?: boolean
  floatingContext: any
  activeIndex: number | null
  selected?: AutocompleteOptionDefault | AutocompleteOptionDefault[] | null
  /** PROPS **/
  propsInput: Record<string, unknown>
  propsList: Record<string, unknown>
  getOptionProps: (
    option: AutocompleteOptionDefault,
    index: number
  ) => AutocompleteOptionProps
  /** CONTROLS **/
  setOpen: (value: boolean) => void
  handleRemoveSelected: (option: AutocompleteOptionDefault) => void
}
export const AutocompleteContext = createContext<any>(null)

export const useAutocomplete = () => {
  const context = useContext<AutocompleteContextValue>(AutocompleteContext)
  if (!context) {
    throw new Error(
      'useAutocomplete must be used within an AutocompleteProvider'
    )
  }
  return context
}
