/** @type {import('tailwindcss').Config} */
const withTailwindConfig = require('./packages/creation-ui-react/src/utils/withTailwindConfig')

module.exports = withTailwindConfig({
  content: [
    //
    './packages/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/*.css',
    '!./node_modules/**/*',
  ],
})
