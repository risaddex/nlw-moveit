import { useContext } from 'react'
import { ChallengeButton } from '../Buttons/ChallengeButton'
import { challengesContext } from '../../context/challengesContext';
import {
  ActiveChallenge as Active,
  ChallengeContainer,
  InactiveChallenge as Inactive,
} from './Challenges'

export const ChalllengeBox = () => {
  const { activeChallenge, resetChallenge} = useContext(challengesContext)

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
            <ChallengeButton onClick={resetChallenge}>Falhei</ChallengeButton>
            <ChallengeButton success>Consegui</ChallengeButton>
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
