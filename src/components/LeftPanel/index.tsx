import { Countdown } from '../Countdown'
import { ProfileInfo } from './CompletedChallenges'
import { Profile } from './Profile'
import styled from 'styled-components'

export const LeftPanel = () => {
  return (
    <PanelContainer>
      <Profile />
      <ProfileInfo />
      <Countdown />
    </PanelContainer>
  )
}

const PanelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
