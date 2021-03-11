import styled from 'styled-components'
import { useState } from 'react'

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

  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 10px;
    left: 10px;
  }
`

const Slider = styled.div<{ currentTheme: 'light' | 'dark' }>`
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

export const Toggler = ({ toggleTheme, currentTheme }) => {
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
      <Slider currentTheme={theme}>
        {theme === 'dark' ? <p>🌝</p> : <p>🌞</p>}
      </Slider>
    </Switcher>
  )
}
