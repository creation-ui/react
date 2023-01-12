/**
 * This is a helper function for merging the main configuration of @creation-ui with the Tailwind CSS configuration
 */

const merge = require('deepmerge')
const colors = require('../theme/base/colors')
const typography = require('../theme/base/typography')
const breakpoints = require('../theme/base/breakpoints')
const twColors = require('tailwindcss/colors')

const creationUiConfig = {
  darkMode: 'class',
  content: [
    './node_modules/@creation-ui/react/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: { ...twColors, ...colors },
    fontFamily: typography,
    screens: breakpoints,
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

/**
 * Merge @creation-ui and Tailwind CSS configurations
 * @param {object} tailwindConfig - Tailwind config object
 * @return {object} new config object
 */
function withTailwindConfig(tailwindConfig) {
  // const themeFont = creationUiConfig.theme.fontFamily

  // if (tailwindConfig.theme.fontFamily) {
  //   const { sans, serif, body } = tailwindConfig.theme.fontFamily

  //   themeFont.sans = sans || themeFont.sans
  //   themeFont.serif = serif || themeFont.serif
  //   themeFont.body = body || themeFont.body
  // }

  const merged = merge(creationUiConfig, { ...tailwindConfig })
  return merged
}
module.exports = withTailwindConfig
