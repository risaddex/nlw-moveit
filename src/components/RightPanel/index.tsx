import styled from 'styled-components';
import { ChalllengeBox } from './ChallengeBox';
import { useContext } from 'react';
import { challengesContext } from '../../context/ChallengesContext';


export const RightPanel = () => {
  const { activeChallenge} = useContext(challengesContext)
  return (
    <StyledRightPanel hidden={activeChallenge === null}>
      <ChalllengeBox />
    </StyledRightPanel>
  )
}

const StyledRightPanel = styled.div<{ hidden: boolean }>`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    transition: opacity 0.5s ease-out;
    height: ${({ hidden }) => (hidden ? 0 : 'auto')};
    opacity: ${({ hidden }) => (hidden ? 0 : 1)};
    z-index: ${({ hidden }) => (hidden ? 0 : 10)};
  }
`