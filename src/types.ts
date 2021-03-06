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
