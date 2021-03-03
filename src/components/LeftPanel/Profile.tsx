import styled from 'styled-components'

export const Profile = () => (
  <Container>
    <img src="https://github.com/risaddex.png" alt="me" />
    <CardContainer>
      <strong>Danilo Romano</strong>
      <LevelContainer>
        <img src="icons/level.svg" alt="level" />
        <p>Level 123 </p>
      </LevelContainer>
    </CardContainer>
  </Container>
)

const Container = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }
`
const CardContainer = styled.div`
  margin-left: 1.25rem;

  strong {
    font-size: 1.25rem;
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
