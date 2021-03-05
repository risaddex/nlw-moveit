import {
  Wrapper,
  ExperienceBar,
  LeftPanel,
  RightPanel,
  Section,
} from '../components'
import { CountdownProvider } from '../context/CountdownContext'

export default function Home() {
  return (
    <Wrapper>
      <ExperienceBar />

      <CountdownProvider>
        <Section>
          <LeftPanel />
          <RightPanel />
        </Section>
      </CountdownProvider>
    </Wrapper>
  )
}
