import { ChallengeButton } from '../Buttons/ChallengeButton'
import {
  ActiveChallenge as Active,
  ChallengeContainer,
  InactiveChallenge as Inactive,
} from './Challenges'


export const ChalllengeBox = (props) => {
  const hasActiveChallenge = true

  return (
    <ChallengeContainer>
      {hasActiveChallenge ? (
        <Active>
          <Active.Header>Ganhe 400 xp</Active.Header>
          <Active.Main>
            <img src="icons/body.svg" alt="Body Icons" />
            <strong>Novo desafio</strong>
            <p>levante</p>
          </Active.Main>
          <Active.Footer>
            <ChallengeButton>Falhei</ChallengeButton>
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
