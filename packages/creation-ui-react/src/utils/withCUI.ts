/**
 * This is a helper function for merging the main configuration of @creation-ui with the Tailwind CSS configuration
 */

import merge from 'deepmerge'

import { colors } from '../theme/base/colors'
import { typography } from '../theme/base/typography'
import { shadows } from '../theme/base/shadows'
import { breakpoints } from '../theme/base/breakpoints'

const creationUiConfig = {
  darkMode: 'class',
  content: [
    './node_modules/@creation-ui/react/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors,
    fontFamily: typography,
    boxShadow: shadows,
    screens: breakpoints,
  },
  plugins: [],
}

/**
 * Merge @creation-ui and Tailwind CSS configurations
 * @param {object} tailwindConfig - Tailwind config object
 * @return {object} new config object
 */
export default function withTailwindConfig(tailwindConfig) {
  const themeFont = creationUiConfig.theme.fontFamily

  if (tailwindConfig.theme.fontFamily) {
    const { sans, serif, body } = tailwindConfig.theme.fontFamily

    themeFont.sans = sans || themeFont.sans
    themeFont.serif = serif || themeFont.serif
    themeFont.body = body || themeFont.body
  }

  return merge(creationUiConfig, { ...tailwindConfig })
}
