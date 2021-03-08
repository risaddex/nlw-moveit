// my-theme.ts
import { DefaultTheme } from 'styled-components'

const myTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    white: '#FFF',
    primary: '#5965E0',
    darkPrimary: '#4953B8',
    title: '#2E384D',
    gray: '#DCDDE0',
    text: '#666666',
    success: '#4CD62B',
    danger: '#E83F5B',
    background: '#E5E5E5',
  },

  shadows: {
    main: '0 0 60px rgba(0, 0, 0, 0.2)',
    nav: '0 0 20px rgba(0, 0, 0, 0.1)',
  },
  gradients: {
    dark: 'linear-gradient(90deg, rgba(0, 0, 0, 0.116),rgba(0, 0, 0, 0.05))',
    nav: 'linear-gradient( #FFF, #E5E5E5)',
  },
}

export { myTheme }