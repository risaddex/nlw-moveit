import { User } from './types';

export const fetchGithubUserData: (user: string) => Promise<User> = async (user) => {
  const options = {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  }

  const res = await fetch(`https://api.github.com/users/${user}`, options)
  const { login, twitter_username, name, id, avatar_url } = await res.json()

  return {
    username: login,
    twitter: twitter_username,
    name: name,
    id: id,
    avatar: avatar_url,
  }
}