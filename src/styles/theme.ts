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
    lightSuccess: '#F7FFF5',
    lightDanger: '#FFF5F5',
    progress: '#4CD62B',
    dangerButton:'#E83F5B'
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

const myDarkTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    white: 'rgb(53, 53, 53)',
    primary: '#5965E0',
    darkPrimary: '#4953B8',
    title: '#fff',
    gray: '#fff',
    text: '#fff',
    success: '#F7FFF5',
    danger: '#FFF5F5',
    background: '#666',
    lightSuccess: '#044e1b',
    lightDanger: '#a80808',
    progress: '#4CD62B',
    dangerButton: '#E83F5B',
  },

  shadows: {
    main: '0 0 60px rgba(0, 0, 0, 0.2)',
    nav: '0 0 20px rgba(255, 255, 255, 0.1)',
  },
  gradients: {
    dark: 'linear-gradient(90deg, rgba(0, 0, 0, 0.116),rgba(0, 0, 0, 0.05))',
    nav: 'linear-gradient( #666666, #535353)',
  },
}

export { myTheme, myDarkTheme }
