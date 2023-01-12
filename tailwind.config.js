/** @type {import('tailwindcss').Config} */
const withTailwindConfig = require('./packages/creation-ui-react/src/utils/withTailwindConfig')

module.exports = withTailwindConfig({
  content: [
    //
    '!./packages/**/*/node_modules/**/*',
    '!node_modules/**/*',
    './**/*.{js,ts,jsx,tsx,mdx}',
    '*.css',
  ],
})
