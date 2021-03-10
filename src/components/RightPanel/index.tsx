import styled from 'styled-components';
import { ChalllengeBox } from './ChallengeBox';


export const RightPanel = () => {
  return (
    <StyledRightPanel>
      <ChalllengeBox />
    </StyledRightPanel>
  )
}

const StyledRightPanel = styled.div`
  display:flex;
  flex-direction:column;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`