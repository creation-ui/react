/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const nextraConfig = withNextra({
  reactStrictMode: true,
  swcMinify: false,
  port: 3005,
})

module.exports = nextraConfig
