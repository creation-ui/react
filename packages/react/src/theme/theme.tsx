import type { ThemeProps, ThemeProviderProps } from '@creation-ui/core'
import { defaultTheme } from '@creation-ui/core'
import { createContext, useContext } from 'react'

export const ThemeCtx = createContext<Partial<ThemeProps>>(defaultTheme)

export const Theme = ({ children, theme = {} }: ThemeProviderProps) => (
  <ThemeCtx.Provider value={{ ...defaultTheme, ...theme }}>
    {children}
  </ThemeCtx.Provider>
)

export const useTheme = () => {
  const context = useContext(ThemeCtx)
  if (context === undefined) {
    throw new Error(`useTheme must be used within a ThemeProvider`)
  }
  return context
}
