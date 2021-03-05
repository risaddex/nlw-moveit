import { useContext } from 'react'
import { ChallengeButton } from '../Buttons/ChallengeButton'
import { challengesContext } from '../../context/ChallengesContext'
import { CountdownContext } from '../../context/CountdownContext'
import {
  ActiveChallenge as Active,
  ChallengeContainer,
  InactiveChallenge as Inactive,
} from './Challenges'

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

  console.log(activeChallenge)

  return (
    <ChallengeContainer>
      {activeChallenge ? (
        <Active>
          <Active.Header>Ganhe {activeChallenge.amount} xp</Active.Header>
          <Active.Main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Body Icons" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </Active.Main>
          <Active.Footer>
            <ChallengeButton onClick={handleChallengeFailed}>
              Falhei
            </ChallengeButton>
            <ChallengeButton onClick={handleChallengeSucceeded} success>
              Completei
            </ChallengeButton>
          </Active.Footer>
        </Active>
      ) : (
        <Inactive>
          <strong>
            Inicie um ciclo recebendo desafios para serem completados
          </strong>
          <div>
            <img src="icons/level-up.svg" alt="level up icon" />
            <p>Avance de level completando desafios.</p>
          </div>
        </Inactive>
      )}
    </ChallengeContainer>
  )
}
