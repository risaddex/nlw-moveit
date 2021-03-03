import {
  Wrapper,
  ExperienceBar,
  LeftPanel,
  RightPanel,
  Section,
} from '../components'

export default function Home() {
  return (
    <Wrapper>
      <ExperienceBar />

      <Section>
        <LeftPanel />
        <RightPanel />
      </Section>
    </Wrapper>
  )
}
