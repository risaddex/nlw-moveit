import { User } from './types';

export const fetchGithubUserData: (user: string | string[]) => Promise<User> = async (user) => {
  if (typeof user === 'object' || user === 'undefined') {
    Promise.reject(new Error('invalid user')).then(() => {

    }, (error) => {
      console.error(error)
    })
  }
  const options = {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  }


  const res = await fetch(`https://api.github.com/users/${user}`, options)
  if (!res.ok) {
    return {
      username: null,
      twitter: null,
      name: null,
      id: null,
      avatar: null,
    }
  }

  const { login, twitter_username, name, id, avatar_url } = await res.json()

  return {
    username: login,
    twitter: twitter_username,
    name: name,
    id: id,
    avatar: avatar_url,
  }
}
