import styled from 'styled-components'
import { useState, useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const Switcher = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 25px;
  padding: 1rem;
  border: 4px solid ${({ theme }) => theme.colors.darkPrimary};
  margin-bottom: 1rem;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.primary};
  outline: none;
  cursor: pointer;


`

const ThemeSlider = styled.div<{ currentTheme: 'light' | 'dark' }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-indent: ${({ currentTheme }) =>
    currentTheme === 'dark' ? '50%' : '-50%'};
  font-size: 20px;
  width: 25px;
  min-height: 25px;
  border-radius: 50%;
  background-color: transparent;

  p {
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 25px;
    width: 60px;
    padding: 1px;
    width: ${({ currentTheme }) => (currentTheme === 'dark' ? '60.01px' : '60px')};
    font-size: 20px;
    transition: text-indent 0.2s ease;
  }
`

const LanguageSlider = styled.div<{ currentLanguage: string}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-indent: ${({ currentLanguage }) =>
    currentLanguage === 'ptbr' ? '50%' : '-50%'};
  font-size: 20px;
  width: 25px;
  min-height: 25px;
  border-radius: 50%;
  background-color: transparent;

  p {
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 25px;
    width: 60px;
    padding: 1px;
    width: ${({ currentLanguage }) =>
      currentLanguage === 'ptbr' ? '60.01px' : '60px'};
    font-size: 20px;
    transition: text-indent 0.2s ease;
  }
`

export const ThemeToggler = ({ toggleTheme, currentTheme }) => {
  const [theme, setTheme] = useState(currentTheme)
  const handleClick = () => {
    toggleTheme()
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  return (
    <Switcher
      onClick={handleClick}
      aria-hidden="true"
      title="toggle light/dark mode"
    >
      <ThemeSlider currentTheme={theme}>
        {theme === 'dark' ? <p>🌝</p> : <p>🌞</p>}
      </ThemeSlider>
    </Switcher>
  )
}

export const LanguageToggler = ({ toggleLanguage }) => {
  const { language: idiom } = useContext(LanguageContext)
  const [language, setLanguage] = useState(idiom)
  
  const handleClick = () => {
    toggleLanguage()
    if (language === 'ptbr') {
      setLanguage('en')
    } else {
      setLanguage('ptbr')
    }
  }
  return (
    <Switcher
      onClick={handleClick}
      aria-hidden="true"
      title="toggle language"
    >
      <LanguageSlider currentLanguage={language}>
        {language === 'ptbr' ? <p>🇧🇷</p> : <p>🇬🇧</p>}
      </LanguageSlider>
    </Switcher>
  )
}