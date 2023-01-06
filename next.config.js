/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const nextraConfig = withNextra({
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
})

module.exports = nextraConfig
