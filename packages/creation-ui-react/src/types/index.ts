export const ELEMENT_COLORS = [
  'amber',
  'blue',
  'cyan',
  'fuchsia',
  'gray',
  'green',
  'indigo',
  'lime',
  'neutral',
  'orange',
  'pink',
  'purple',
  'red',
  'rose',
  'sky',
  'slate',
  'stone',
  'teal',
  'yellow',
  'zinc',
]

export const COLORS = ['primary', 'success', 'error', 'warning'] as const
export const ELEMENT_STATUS = [
  'active',
  'error',
  'warning',
  'success',
  'info',
] as const
export const ELEMENT_SIZES = ['sm', 'md', 'lg'] as const
export const ELEMENT_THEMES = ['dark', 'light'] as const
export const ELEMENT_VARIANTS = ['contained', 'outlined', 'text'] as const
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
  'lead',
  'paragraph',
  'small',
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

export type Colors = (typeof COLORS)[number]
export type Breakpoints = (typeof BREAKPOINTS)[number]
export type ElementStatus = (typeof ELEMENT_STATUS)[number]
export type ElementState = (typeof ELEMENT_STATES)[number]
export type ElementSize = (typeof ELEMENT_SIZES)[number]
export type ElementColor = (typeof ELEMENT_COLORS)[number]
export type ElementOrientation = (typeof ELEMENT_ORIENTATION)[number]
export type ElementTheme = (typeof ELEMENT_THEMES)[number]
export type ElementVariant = (typeof ELEMENT_VARIANTS)[number]
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

export type AutocompleteOptionsType =
  | { id: string | number; value: string | number | null }
  | any
  | null
  | undefined

export type SelectOptionsType =
  | {
      id: string | number
      value: string | number | null
      disabled?: boolean
    }
  | any
  | null

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
  'chevron_left',
  'chevron_right',
  'chevron_down',
  'close',
  'check',
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

export type ReadableError = {
  message: React.ReactNode
  title: React.ReactNode
  code?: React.ReactNode
}
