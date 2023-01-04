/** @type {import('tailwindcss').Config} */
const withTailwindConfig = require('./packages/creation-ui-react/src/utils/withTailwindConfig')

module.exports = withTailwindConfig({
  content: [
    //
    '!./packages/**/*/node_modules/**/*',
    '!node_modules/**/*',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './packages/**/*.{js,ts,jsx,tsx,mdx,css}',
    '*.css'
  ],
})
