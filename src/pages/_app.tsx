import { AppProps } from 'next/dist/next-server/lib/router/router'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { myTheme, myDarkTheme } from '../styles/theme'
import { useState } from 'react'

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
  const [theme, setTheme] = useState('light')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? myTheme : myDarkTheme}>
      <GlobalStyle />
      <Component currentTheme={theme} themeToggler={themeToggler} {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
