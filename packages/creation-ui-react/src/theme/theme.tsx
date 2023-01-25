import { createContext, useContext } from 'react'
import theme from './theme.default'
import type { ThemeProps, ThemeProviderProps } from './theme.types'

export const ThemeCtx = createContext<ThemeProps>(theme)

export const Theme = ({ children, theme }: ThemeProviderProps) => {
  return <ThemeCtx.Provider value={theme}>{children}</ThemeCtx.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeCtx)
  if (context === undefined) {
    throw new Error(`useTheme must be used within a ThemeProvider`)
  }
  return context
}
