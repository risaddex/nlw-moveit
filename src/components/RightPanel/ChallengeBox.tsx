import { useContext } from 'react';
import { challengesContext } from '../../context/ChallengesContext';
import { CountdownContext } from '../../context/CountdownContext';
import { ChallengeButton } from '../Buttons/ChallengeButton';
import {
  ActiveChallenge as Active,
  ChallengeContainer,
  InactiveChallenge as Inactive, StyledFooter, StyledHeader, StyledMain
} from './Challenges';

export const ChalllengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    challengesContext
  )
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
          <StyledHeader>Ganhe {activeChallenge.amount} xp</StyledHeader>
          <StyledMain>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Body Icons" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </StyledMain>
          <StyledFooter>
            <ChallengeButton onClick={handleChallengeFailed}>
              Falhei
            </ChallengeButton>
            <ChallengeButton onClick={handleChallengeSucceeded} success>
              Completei
            </ChallengeButton>
          </StyledFooter>
        </Active>
      ) : (
        <Inactive>
          <strong>
            Inicie um ciclo para receber desafios
          </strong>
          <div>
            <img src="icons/level-up.svg" alt="level up icon" />
            <p>Avance de nível completando os desafios.</p>
          </div>
        </Inactive>
      )}
    </ChallengeContainer>
  )
}
