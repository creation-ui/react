import type {
  AutocompleteOptionsType,
  ElementPosition,
  ElementSize,
  ElementTheme,
  TailwindColorSet,
} from '../types'

type ThemeColors = {
  inherit: string
  current: string
  transparent: string
  black: string
  white: string
  primary: TailwindColorSet | string
  success: TailwindColorSet | string
  warning: TailwindColorSet | string
  error: TailwindColorSet | string
}

type ThemeDrawers = {
  size: number | string
  position: ElementPosition
}

type ThemeFont = {
  leading: string
  fontFamily: string
  fontFamilyMonospace: string
  fontWeight: string
}

export type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingConfig = {
  fontSize: string
  leading: string
  fontWeight?: string
}

type ThemeHeading = {
  fontFamily: string
  fontWeight: string
  sizes: Record<Headings, HeadingConfig>
}

type ThemeTexts = {
  invalidInput: string
}

type ThemeZIndex = {
  base: string
  dropdowns: string
  tooltips: string
  overlays: string
  modals: string
  notifications: string
}

type ThemeHelpers = {
  getLimitText: (more: number) => string
  optionFormatter: (option?: AutocompleteOptionsType) => string
}

type ThemeDisplayDirection = 'ltr' | 'rtl'

export type ThemeProps = {
  colors: ThemeColors
  dir: ThemeDisplayDirection
  drawers: ThemeDrawers
  focusRing: boolean
  font: ThemeFont
  headings: ThemeHeading
  helpers: ThemeHelpers
  respectReducedMotion: boolean
  roundness: string
  size: ElementSize
  texts: ThemeTexts
  theme: ElementTheme
  zIndex: ThemeZIndex
}

export interface ThemeProviderProps {
  children?: React.ReactNode
  theme?: Partial<ThemeProps>
}
