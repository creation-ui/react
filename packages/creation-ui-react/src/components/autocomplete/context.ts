import { createContext, ReactNode, useContext } from 'react'
import {
  AutocompleteOptionProps,
  AutocompleteOptionType,
  AutocompleteProps,
} from './types'

interface AutocompleteContextValue<T>
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
    | 'defaultTagStatus'
    | 'defaultTagVariant'
    | 'autoHighlight'
  > {
  open?: boolean
  floatingContext: any
  activeIndex: number | null
  selected?: AutocompleteOptionType | AutocompleteOptionType[] | null
  /** PROPS **/
  propsInput: Record<string, unknown>
  propsList: Record<string, unknown>
  getOptionProps: (
    option: AutocompleteOptionType,
    index: number
  ) => AutocompleteOptionProps
  /** CONTROLS **/
  setOpen: (value: boolean) => void
  handleRemoveSelected: (option: AutocompleteOptionType) => void
}

export const AutocompleteContext = createContext({})

export const useAutocomplete = () => {
  const context = useContext(AutocompleteContext)
  if (!context) {
    throw new Error(
      'useAutocomplete must be used within an AutocompleteProvider'
    )
  }
  return context
}
