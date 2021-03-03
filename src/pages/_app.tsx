import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ThemeProvider } from 'styled-components'
import { myTheme } from '../styles/theme'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Inter', sans-serif;
    // Deixa branco no começo
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
