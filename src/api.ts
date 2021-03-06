import { User } from './types';

export const fetchGithubUserData: (user: string | string[]) => Promise<User> = async (user) => {
  if (typeof user === 'object') {
    user = user.slice(0, 1)
  }
  
  const options = {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  }

  let response
  const res = await fetch(`https://api.github.com/users/${user}`, options)
    .then((res) => {
      if (res.ok) {
        response = res.json()
      }

      throw new Error('Failed on retrieve data from server')
    })
    .catch((e) => {
      console.error(e)
    })

  const { login, twitter_username, name, id, avatar_url } = await response.json()

  return {
    username: login,
    twitter: twitter_username,
    name: name,
    id: id,
    avatar: avatar_url,
  }
}
