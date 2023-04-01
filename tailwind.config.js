const withTailwindConfig = require('./packages/creation-ui-react/src/utils/withTailwindConfig')

/** @type {import('tailwindcss').Config} */
module.exports = withTailwindConfig({
  content: [
    //
    './packages/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/*.css',
    '!node_modules',
  ],
  extend: {
    transitionDelay: {
      0: '0ms',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
})
