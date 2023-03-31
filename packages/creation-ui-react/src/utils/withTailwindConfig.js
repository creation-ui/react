/**
 * This is a helper function for merging the main configuration of @creation-ui with the Tailwind CSS configuration
 */

const { merge } = require('lodash')
const colors = require('../theme/base/colors')
const typography = require('../theme/base/typography')
const shadows = require('../theme/base/shadows')
const breakpoints = require('../theme/base/breakpoints')
const twColors = require('tailwindcss/colors')

delete twColors['lightBlue']
delete twColors['warmGray']
delete twColors['trueGray']
delete twColors['coolGray']
delete twColors['blueGray']

const creationUiConfig = {
  darkMode: 'class',
  content: ['node_modules/@creation-ui/react/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: { ...twColors, ...colors },
    fontFamily: typography,
    screens: breakpoints,
    // boxShadow: shadows,
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),
    require('@tailwindcss/forms')({ prefix: 'forms' }),
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
