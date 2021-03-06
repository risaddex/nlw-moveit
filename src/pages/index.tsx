import styled from 'styled-components'
import { LoginForm } from '../components/LoginForm/index'
import { Section } from '../components/Section/index'
import { StyledWrapper } from '../components/Wrapper/index'

const Background = styled(StyledWrapper)`
  background: url('bg.svg') no-repeat;
  background-size: 50%;
  background-position: left;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  min-width: 100%;
`
const WelcomeSection = styled(Section)`
  margin: 0;
  gap: 0;
`

const Welcome = () => {
  return (
    <Background>
      <WelcomeSection>
        <LoginForm />
      </WelcomeSection>
    </Background>
  )
}

export default Welcome
