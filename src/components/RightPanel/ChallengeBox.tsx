import { useContext } from 'react';
import { challengesContext } from '../../context/ChallengesContext';
import { CountdownContext } from '../../context/CountdownContext';
import { LanguageContext } from '../../context/LanguageContext';
import { ChallengeButton } from '../Buttons/ChallengeButton';
import {
  ActiveChallenge as Active,
  ChallengeContainer,
  InactiveChallenge as Inactive, StyledFooter, StyledHeader, StyledMain
} from './Styled';

export const ChalllengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    challengesContext
  )
  

  const { data } = useContext(LanguageContext)
  const { resetCountdown } = useContext(CountdownContext)

  const handleChallengeSucceeded = () => {
    completeChallenge()
    resetCountdown()
  }

  const handleChallengeFailed = () => {
    resetChallenge()
    resetCountdown()
  }

  return (
    <ChallengeContainer>
      {activeChallenge ? (
        <Active>
          <StyledHeader>
            {data.challenges.earn} {activeChallenge.amount} xp
          </StyledHeader>
          <StyledMain>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Body Icons" />
            <strong>{data.challenges.newChallenge}</strong>
            <p>{activeChallenge.description}</p>
          </StyledMain>
          <StyledFooter>
            <ChallengeButton onClick={handleChallengeFailed}>
              {data.challenges.failed}
            </ChallengeButton>
            <ChallengeButton onClick={handleChallengeSucceeded} success>
              {data.challenges.complete}
            </ChallengeButton>
          </StyledFooter>
        </Active>
      ) : (
        <Inactive>
          <strong>{data.challenges.heading}</strong>
          <div>
            <img src="icons/level-up.svg" alt="level up icon" />
            <p>{data.challenges.text}</p>
          </div>
        </Inactive>
      )}
    </ChallengeContainer>
  )
}
