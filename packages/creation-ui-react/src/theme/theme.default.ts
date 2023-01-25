import type { ThemeProps } from './theme.types'
import colors from './base/colors'

const theme: ThemeProps = {
  theme: 'light',
  dir: 'ltr',
  focusRing: true,
  colors,
  roundness: 'rounded-md',
  size: 'md',
  font: {
    leading: 'leading-normal',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontFamilyMonospace: 'font-mono',
    fontWeight: 'font-bold',
  },
  respectReducedMotion: true,
  drawers: {
    size: '50vw',
    position: 'right',
  },
  headings: {
    //TODO: use in component
    fontFamily: 'font-sans',
    fontWeight: 'font-bold',
    sizes: {
      h1: { fontSize: 'text-6xl', leading: 'leading-snug' },
      h2: { fontSize: 'text-5xl', leading: 'leading-5' },
      h3: { fontSize: 'text-4xl', leading: 'leading-6' },
      h4: { fontSize: 'text-3xl', leading: 'leading-6' },
      h5: { fontSize: 'text-2xl', leading: 'leading-normal' },
      h6: { fontSize: 'text-xl', leading: 'leading-normal' },
    },
  },
  texts: {
    invalidInput: 'Input invalid',
  },
  zIndex: {
    base: 'z-0',
    dropdowns: 'z-[200]',
    tooltips: 'z-[400]',
    overlays: 'z-[600]',
    modals: 'z-[800]',
    notifications: 'z-[1000]',
  },
  helpers: {
    getLimitText: more => `+${more}`,
    optionFormatter: option => (option?.value ? `${option.value}` : ''),
  },
}

export default theme
