import { GetServerSideProps } from 'next'
import {
  Wrapper,
  ExperienceBar,
  LeftPanel,
  RightPanel,
  Section,
} from '../components'

type HomeProps = {
  level: number
  currentExp: number
  challengesCompleted: number
}
import { CountdownProvider } from '../context/CountdownContext'
import { ChallengesProvider } from '../context/ChallengesContext'

export default function Home({
  level,
  currentExp,
  challengesCompleted,
}: HomeProps) {
  return (
    
      <Wrapper>
        <ChallengesProvider
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
  const { level, currentExp, challengesCompleted } = ctx.req.cookies

  console.log(ctx.req.cookies)
  return {
    props: {
      level: Number(level),
      currentExp: Number(currentExp),
      challengesCompleted: Number(challengesCompleted),
    },
  }
}
