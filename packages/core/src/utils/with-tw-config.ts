import { merge, keys } from 'lodash'
import themeColors from '../theme/base/colors'
import typography from '../theme/base/typography'
import breakpoints from '../theme/base/breakpoints'
import twColors from 'tailwindcss/colors'
import forms from './forms'
import headless from '@headlessui/tailwindcss'

const deprecated = ['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray']

keys(twColors).forEach(key => {
  if (deprecated.includes(key)) {
    delete twColors[key]
  }
})

const creationUiConfig = {
  darkMode: 'class',
  content: ['node_modules/@creation-ui/react/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: { ...twColors, ...themeColors },
    fontFamily: typography,
    screens: breakpoints,
    // boxShadow: shadows,
  },
  plugins: [forms({ strategy: 'class' }), headless({ prefix: 'ui' })],
}

/**
 * Merge @creation-ui and Tailwind CSS configurations
 * @param {object} userConfig - Tailwind config object
 * @return {object} new config object
 */
const withTailwindConfig = (userConfig = {}) =>
  merge(creationUiConfig, { ...userConfig })

export default withTailwindConfig
