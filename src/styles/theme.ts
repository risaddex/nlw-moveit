// my-theme.ts
import { DefaultTheme } from 'styled-components'

const myTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    white: '#fff',
    blue: 'rgba(59, 130, 246,1)',
    darkBlue: 'rgba(30, 64, 175, 1)',
    red: 'rgb(243, 21, 21)',
    title: 'rgb(50, 50, 50)',
    text: 'rgb(25, 25, 25)'
  },

  shadows: {
    main: '0 0 60px rgba(0, 0, 0, 0.5)',
  }
}

export { myTheme }