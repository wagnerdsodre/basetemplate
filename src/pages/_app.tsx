import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Template</title>
        <link rel="icon" href="/img/" />
        <link rel="touch-icon" href="/img/" />
        <meta
          name="description"
          content="Started with typescript, styled-components, jest, React and Next"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
