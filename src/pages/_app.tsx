import type { AppProps } from 'next/app'
import { Layout } from 'src/components/layout'
import { ThemeProvider } from 'next-themes'
import '~styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
