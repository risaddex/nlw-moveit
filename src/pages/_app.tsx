import { AppProps } from 'next/dist/next-server/lib/router/router'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { myTheme } from '../styles/theme'

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
    background-color: ${({ theme }) => theme.colors.background};
    // Deixa branco no começo
  }
  
  html, body {
    min-height: 100vh;
  }

  #__next {
    flex: 1;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow:hidden;
  }

  a {
    text-decoration: none;
  }
  
  @media only screen and (max-width: 768px) {
    html, body {
      width: 100%;
      height: auto;
      scroll-behavior: smooth;
    }
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
