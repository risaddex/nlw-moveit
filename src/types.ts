export type Challenge = {
  type: 'body' | 'eye'
  description: string
  amount: number
}

export type User = {
  name: string
  twitter: string
  id: number
  avatar: string
  username: string
}

export type LanguageDataProps = {
  welcome: string
  login: string
  input: string
  loginError: string
  warning: any
  challenges: any
  levelUp: any
  config: any
}
