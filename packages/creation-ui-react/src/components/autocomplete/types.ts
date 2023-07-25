import {
  BaseComponentProps,
  DropdownMaxHeight,
  ElementStatus,
  ElementVariant,
  InputBaseProps,
} from '../../types'

export type AutocompleteOptionType = string | { label: string }

export interface AutocompleteProps<T = AutocompleteOptionType>
  extends BaseComponentProps {
  /**
   * Custom function to compare option and value
   */
  isOptionEqualToValue?: (option: T, value: T) => boolean
  /**
   * Getter for option disabled state
   */
  getOptionDisabled?: (option: T) => boolean
  /**
   * Getter for option label
   */
  getOptionLabel?: (option: T) => string
  /**
   * Component to display list options
   */
  renderOption?: (props: AutocompleteOptionProps, option: T) => React.ReactNode
  /**
   * Component to display list options
   */
  renderSelection?: (option: T) => React.ReactNode
  /**
   * Component to display selection in `multiple` mode
   */
  renderTags?: (selected: T[]) => React.ReactNode
  /**
   * The label to display when the tags are truncated (limitTags).
    Signature:
    function(more: number) => ReactNode
    more: The number of truncated tags.
   */
  getLimitTagsText?: (more: number) => string
  /**
   * Filter options function
   */
  filterOptions?: (
    options: T[],
    filterOptions: AutocompleteFilterOptions
  ) => T[]
  /**
   * CSS classes API
   */
  cx?: InputBaseProps['cx']
  /**
   * Placeholder
   */
  placeholder?: string | null
  /**
   * List options
   */
  options?: T[]
  /**
   * Default value to display when component is not controlled
   */
  defaultValue?: T
  /**
   * Current value to display
   */
  value?: T
  /**
   * Close button tooltip text
   */
  textEmpty?: string | null
  /**
   * Not found text
   */
  textNotFound?: string | null
  /**
   * Loading icon tooltip text
   */
  textLoading?: string | null
  /**
   * Clear button tooltip text
   */
  textClear?: string | null
  /**
   * Close button tooltip text
   */
  textClose?: string | null
  /**
   * Should display clear value button
   */
  clearable?: boolean
  /**
   * Is field required
   */
  required?: boolean
  /**
   * Is disabled
   */
  disabled?: boolean
  /**
   * Allow selection of multiple value
   */
  multiple?: boolean
  /**
   * Should highlight matched text TODO: not implemented
   */
  highlightSearch?: boolean
  /**
   * Limit of multiple selected to be displayed in input
   */
  limit?: number
  /**
   * Should display Loader
   */
  loading?: boolean

  /**
   * onChange callback. Will return array of selected values. If !multiple, will return array with one value.
   * @param value
   * @returns
   */
  onChange?: (value: T | T[]) => void
  /**
   * @default 500
   * either provide a number of pixels or a string like 1rem, 20vh, etc.
   * 'availableHeight': will set the max height of the dropdown to the available height of the screen
   */
  maxHeight?: DropdownMaxHeight
  /**
   * Variant of the input
   */
  variant?: ElementVariant
  /**
   * Variant of the default Tags
   */
  defaultTagVariant?: ElementVariant
  /**
   * Status of the default Tags
   */
  defaultTagStatus?: ElementStatus
  /**
   * z-index configuration
   */
  zIndex?: { list?: number }
  /**
   * Should filter selected options from the list
   */
  filterSelectedOptions?: boolean
}

export interface AutocompleteFilterOptionsConfig<T = AutocompleteOptionType> {
  ignoreAccents?: boolean
  ignoreCase?: boolean
  limit?: number
  matchFrom: 'start' | 'any' | 'end'
  stringify?: (option: T) => string
  trim?: boolean
}

export interface AutocompleteFilterOptions<T = any> {
  query: string
  getOptionLabel: (option: T) => string
}

export type AutocompleteOptionProps = {
  className: string
  index: number
  query: string
  active: boolean
} & GetItemPropsReturnType

export type GetItemPropsReturnType = {
  'aria-selected'?: boolean
  'aria-disabled'?: boolean
  role: string
  key: string
  multiple: boolean
  selected: boolean
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  ref: React.RefObject<HTMLLIElement>
} & React.HTMLProps<HTMLLIElement>
