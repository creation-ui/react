import '../styles/index.css'
import '@creation-ui/react/index.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='debug-screens'>
      <Component {...pageProps} />
      <Analytics />
    </div>
  )
}
