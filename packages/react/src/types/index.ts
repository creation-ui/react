import type React from 'react'

export const ELEMENT_STATUS = [
  'primary',
  'error',
  'warning',
  'success',
  'info',
] as const
export const ELEMENT_SIZES = ['sm', 'md', 'lg'] as const
export const ELEMENT_THEMES = ['dark', 'light'] as const
export const ELEMENT_BASE_VARIANTS = ['contained', 'outlined'] as const
export const ELEMENT_VARIANTS = [...ELEMENT_BASE_VARIANTS, 'text'] as const
export const ELEMENT_ORIENTATION = ['vertical', 'horizontal'] as const
export const ELEMENT_PLACEMENT_VERTICAL = ['top', 'bottom'] as const
export const ELEMENT_PLACEMENT_HORIZONTAL = ['right', 'left'] as const
export const ELEMENT_POSITION = ['top', 'bottom', 'right', 'left'] as const
export const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl', 'xl2'] as const
export const TYPOGRAPHY = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'content',
  'description',
] as const
export const TAILWIND_SHADES = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900,
] as const
export const ELEMENT_STATES = [
  'hover',
  'focus',
  'active',
  'disabled',
  'default',
] as const

export type HTMLInputType = React.InputHTMLAttributes<HTMLInputElement>['type']

export type Breakpoints = (typeof BREAKPOINTS)[number]
export type ElementStatus = (typeof ELEMENT_STATUS)[number]
export type ElementState = (typeof ELEMENT_STATES)[number]
export type ElementSize = (typeof ELEMENT_SIZES)[number]
export type ElementOrientation = (typeof ELEMENT_ORIENTATION)[number]
export type ElementTheme = (typeof ELEMENT_THEMES)[number]
export type ElementVariant = (typeof ELEMENT_VARIANTS)[number]
export type ElementBaseVariant = (typeof ELEMENT_BASE_VARIANTS)[number]
export type ElementPlacementHorizontal =
  (typeof ELEMENT_PLACEMENT_HORIZONTAL)[number]
export type ElementPlacementVertical =
  (typeof ELEMENT_PLACEMENT_VERTICAL)[number]
export type ElementPosition = (typeof ELEMENT_POSITION)[number]
export type ElementTypography = (typeof TYPOGRAPHY)[number]
export type ElementPlacement = {
  horizontal: ElementPlacementHorizontal
  vertical: ElementPlacementVertical
}

export type GetComponentProps<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? P
  : never

export type DropdownOptionType = {
  id: string
  label: string
  disabled?: boolean
}

export type CommitInfo = {
  shortHash: string
  hash: string
  subject: string
  sanitizedSubject: string
  body: string
  authoredOn: string
  committedOn: string
  author: {
    name: string
    email: string
  }
  committer: {
    name: string
    email: string
  }
  notes: string
  branch: string
  tags: string[]
  version: string
  timestamp: string
}

export interface MultipleEllipsisFormatter {
  value: string
  hidden: number
  total: number
}

export type ClassName = string[] | string | undefined

export type TailwindShades = (typeof TAILWIND_SHADES)[number]
export type TailwindColorSet = Record<TailwindShades, string>

export const icons = [
  'check',
  'chevron_down',
  'chevron_left',
  'chevron_right',
  'close',
  'dot',
  'home',
  'readonly',
  'slash',
  'straight',
] as const

export type IconType = (typeof icons)[number]

export interface BaseComponentProps {
  className?: string
  /**
   * HTML id of element
   */
  id?: string
  /**
   * Is element required?
   */
  required?: boolean
  /**
   * Is element read-only?
   */
  readOnly?: boolean
  /**
   * element size
   */
  size?: ElementSize
  /**
   * Input label
   */
  label?: string
  /**
   * Is disabled?
   */
  disabled?: boolean
  /**
   * Error message
   */
  error?: React.ReactNode
  /**
   * Helper text
   */
  helperText?: React.ReactNode
}

export interface InputBaseProps extends Omit<BaseComponentProps, 'className'> {
  /**
   * Component is in loading state?
   */
  loading?: boolean
  /**
   * Variant of the component?
   */
  variant?: ElementVariant
  /**
   * Element to be displayed on the left side of the input
   */
  startAdornment?: React.ReactNode
  /**
   * Element to be displayed on the right side of the input
   */
  endAdornment?: React.ReactNode
  /**
   * Type of HTML input
   */
  type?: HTMLInputType
  /**
   * Children
   */
  children: React.ReactNode
  /**
   * Show clear input icon?
   */
  clearable?: boolean
  /**
   * Callback for clear input icon.
   */
  onClear?: () => void
  /**
   * Layout of elements
   */
  layout?: 'column' | 'row'
  /**
   * CSS classes API
   */
  cx?: InputClassNamesAPI
  /**
   * Disable interactions e.g. while loading, readOnly, disabled. This will prevent interactions with the input by "pointer-events-none".
   */
  interactionsDisabled?: boolean
  /**
   * Placeholder
   */
  placeholder?: string
}

export type InputClassNamesAPI = {
  container?: {
    outer?: string
    inner?: string
  }
  label?: string
  input?: string
}

export type ReadableError = {
  message: React.ReactNode
  title: React.ReactNode
  code?: React.ReactNode
}

export type DropdownValueType =
  | DropdownOptionType
  | DropdownOptionType[]
  | string
  | string[]
  | null

type OptionComponentType =
  | React.ForwardRefExoticComponent<
      Omit<OptionProps & React.HTMLProps<HTMLLIElement>, 'ref'> &
        React.RefAttributes<HTMLLIElement>
    >
  | React.FC<OptionProps & React.HTMLProps<HTMLLIElement>>

export type DropdownMaxHeight = number | string | 'available'

export interface DropdownProps extends BaseComponentProps {
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
  options?: DropdownOptionType[] | string[]
  /**
   * Component to display list options
   */
  optionComponent?: OptionComponentType
  /**
   * Component to display list options
   */
  selectedOptionComponent?: React.FC<SelectedOptionProps>
  /**
   * Default value to display when component is not controlled
   */
  defaultValue?: DropdownOptionType | string
  /**
   * Current value to display
   */
  value?: DropdownValueType
  /**
   * Close button tooltip text
   */
  emptyText?: string | null
  /**
   * Not found text
   */
  notFoundText?: string | null
  /**
   * Loading icon tooltip text
   */
  loadingText?: string | null
  /**
   * Clear button tooltip text
   */
  clearText?: string | null
  /**
   * Close button tooltip text
   */
  closeText?: string | null
  // flags
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
   * Format of count of multiple selected to be displayed in input
   */
  getLimitText?: (more: number) => string
  /**
   * Filter options function
   */
  filterOptions?: (
    query?: string
  ) => (option: DropdownOptionType | any) => string
  /**
   * onChange callback. Will return array of selected values. If !multiple, will return array with one value.
   * @param value
   * @returns
   */
  onChange?: (value: DropdownValueType) => void
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
   * z-index configuration
   */
  zIndex?: { list?: number }
}

export interface OptionProps {
  active: boolean
  selected?: boolean
  option: DropdownOptionType
  multiple?: boolean
  size?: ElementSize
  children?: React.ReactNode
}

export interface SelectedOptionProps {
  option: DropdownOptionType
  children?: React.ReactNode
  idx: number
}

export type BreadcrumbLink = {
  href: string
  label: string
  disabled?: boolean
}
