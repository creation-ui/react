import '../styles/index.scss'
// import '@creation-ui/core/esm/index.css'
// import '@creation-ui/button/esm/index.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
