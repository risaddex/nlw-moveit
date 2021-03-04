import { Countdown } from '../Countdown'
import { CompletedChallenges } from './CompletedChallenges'
import { Profile } from './Profile'
import styled from 'styled-components'

export const LeftPanel = () => {
  return (
    <PanelContainer>
      <Profile />
      <CompletedChallenges />
      <Countdown />
    </PanelContainer>
  )
}

const PanelContainer = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
`
