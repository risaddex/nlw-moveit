import styled from 'styled-components'
import { useContext } from 'react'
import { challengesContext } from '../../context/ChallengesContext'

export const Profile = () => {
  const { level, currentUser } = useContext(challengesContext)

  return (
    <Container>
      <img src={currentUser.avatar} alt="user avatar" />
      <CardContainer>
        <strong>{currentUser.name}</strong>
        <LevelContainer>
          <img src="icons/level.svg" alt="level" />
          <p>Level {level} </p>
        </LevelContainer>
      </CardContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  

  > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }
  @media only screen and (max-width: 768px) {
    display:none;
  }
`
const CardContainer = styled.div`
  margin-left: 1.25rem;

  strong {
    font-size: 1.25rem;
  }
  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`
const LevelContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 0.75rem;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  }

  
`
