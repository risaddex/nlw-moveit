import { GetServerSideProps } from 'next'
import { fetchGithubUserData } from '../../api'
import {
  ExperienceBar,
  LeftPanel,
  RightPanel,
  Section,
  Wrapper,
} from '../../components'
import { Sidebar } from '../../components/Layout/Sidebar'
import { ChallengesProvider } from '../../context/ChallengesContext'
import { CountdownProvider } from '../../context/CountdownContext'
import { User } from '../../types'
import { useRouter } from 'next/router'
import GitHubCorner from '../../components/GitHubCorner'

type HomeProps = {
  user: User
  level: number
  currentExp: number
  challengesCompleted: number
}

export default function App({
  user,
  level,
  currentExp,
  challengesCompleted,
}: HomeProps) {
  if (user.name === 'undefined') {
    useRouter().push('/')
  }

  return (
    <>
      <Sidebar active="home" />
      <Wrapper>
        <GitHubCorner
          current="home"
          projectUrl="https://github.com/risaddex/nlw-moveit"
        />
        <ChallengesProvider
          userData={user}
          level={level}
          currentExp={currentExp}
          challengesCompleted={challengesCompleted}
        >
          <ExperienceBar />
          <CountdownProvider>
            <Section>
              <LeftPanel />
              <RightPanel />
            </Section>
          </CountdownProvider>
        </ChallengesProvider>
      </Wrapper>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const userData = await fetchGithubUserData(ctx.query.user)

  if (userData.name === null) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const cookies = Object.keys(ctx.req.cookies).find((item) =>
    item.startsWith(`${userData.id}_`)
  )
    ? {
        level: ctx.req.cookies[`${userData.id}_level`],
        currentExp: ctx.req.cookies[`${userData.id}_currentExp`],
        challengesCompleted:
          ctx.req.cookies[`${userData.id}_challengesCompleted`],
      }
    : {
        level: 1,
        currentExp: 0,
        challengesCompleted: 0,
      }

  console.log(userData, '\n', cookies)
  const { level, currentExp, challengesCompleted } = cookies

  return {
    props: {
      user: userData,
      level: Number(level),
      currentExp: Number(currentExp),
      challengesCompleted: Number(challengesCompleted),
    },
  }
}
