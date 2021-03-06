import { GetServerSideProps } from 'next'
import {
  Wrapper,
  ExperienceBar,
  LeftPanel,
  RightPanel,
  Section,
} from '../../components'

type HomeProps = {
  user: User
  level: number
  currentExp: number
  challengesCompleted: number
}
import { CountdownProvider } from '../../context/CountdownContext'
import { ChallengesProvider } from '../../context/ChallengesContext'
import { User } from '../../types'
import { fetchGithubUserData } from '../../api'
import { Router } from 'next/router';

export default function App({
  user,
  level,
  currentExp,
  challengesCompleted,
}: HomeProps) {
  
  return (
    <Wrapper>
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
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  console.log('carregando')
 
    const userData = await fetchGithubUserData(ctx.query.user)

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

  console.log(cookies)
  const { level, currentExp, challengesCompleted } = cookies

   if (/\W/g.test(ctx.query.user)) {
     return {
       redirect: {
         destination: '/',
         permanent: false
       }
     }
   }

  return {
    props: {
      user: userData,
      level: Number(level),
      currentExp: Number(currentExp),
      challengesCompleted: Number(challengesCompleted),
    },
  }
}
