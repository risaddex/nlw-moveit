import { useState } from 'react'
import styled from 'styled-components'
import { LoginForm } from '../components/LoginForm/index'
import { Spinner } from '../components/LoginForm/Loading'
import { Section } from '../components/Section/index'
import { StyledWrapper } from '../components/Wrapper/index'

const Background = styled(StyledWrapper)<{ isLoading: boolean}>`
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
  const [isLoading, setIsLoading] = useState(false)

  const setLoadingState = () => {
    setIsLoading(true)
  }

  return (
    <Background isLoading={true}>
      <WelcomeSection>
        <LoginForm setLoading={setLoadingState} />
      </WelcomeSection>
      {isLoading && <Spinner />}
    </Background>
  )
}

export default Welcome
