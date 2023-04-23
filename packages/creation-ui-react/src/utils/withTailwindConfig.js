/**
 * This is a helper function for merging the main configuration of @creation-ui with the Tailwind CSS configuration
 */

const { merge } = require('lodash')
const themeColors = require('../theme/base/colors')
const typography = require('../theme/base/typography')
// const shadows = require('../theme/base/shadows')
const breakpoints = require('../theme/base/breakpoints')
const twColors = require('tailwindcss/colors')

const deprecated = ['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray']

Object.keys(twColors).forEach(key => {
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
  plugins: [
    require('./forms')({
      strategy: 'class', // only generate classes
    }),
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
  ],
}

/**
 * Merge @creation-ui and Tailwind CSS configurations
 * @param {object} userConfig - Tailwind config object
 * @return {object} new config object
 */
const withTailwindConfig = (userConfig = {}) =>
  merge(creationUiConfig, { ...userConfig })

module.exports = withTailwindConfig
