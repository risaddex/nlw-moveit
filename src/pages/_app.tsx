import { AppProps } from 'next/dist/next-server/lib/router/router'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { myTheme, myDarkTheme } from '../styles/theme'
import { useState } from 'react'
import { LanguageProvider } from '../context/LanguageContext'

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
  const [language, setLanguage] = useState('ptbr')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const languageToggler = () => {
    language === 'ptbr' ? setLanguage('en') : setLanguage('ptbr')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? myTheme : myDarkTheme}>
      <LanguageProvider language={language}>
        <GlobalStyle />
        <Component
          languageToggler={languageToggler}
          currentTheme={theme}
          language={language}
          themeToggler={themeToggler}
          {...pageProps}
        />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default MyApp
