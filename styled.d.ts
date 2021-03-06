import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string

    colors: Object<string>

    shadows: Object<string>
    gradients: Object<string>
  }
}
