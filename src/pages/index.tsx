import { useState, useEffect } from 'react';
import styled from 'styled-components'
import { LoginForm } from '../components/LoginForm/index'
import { Spinner } from '../components/LoginForm/Loading'
import { Section } from '../components/Section/index'
import { StyledWrapper } from '../components/Wrapper/index'
import { useRouter } from 'next/router';
import { WarningModal } from '../components/Modal';
import GitHubCorner from '../components/GitHubCorner';

const Background = styled(StyledWrapper)`
  background: url('bg.svg') no-repeat;
  background-size: 50%;
  background-position: left;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  min-width: 100%;
  
  @media only screen and (max-width: 768px) {
    padding:2rem 1rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

`
const Welcome = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(true)
  const router = useRouter()

  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    if (isLoading) {
      router.push('/')
    }
  }, [])

  const setLoadingState = () => {
    setIsLoading(true)
  }

  return (
    <Background>
      <GitHubCorner
        current="app"
        projectUrl="https://github.com/risaddex/nlw-moveit"
      />
      {isModalOpen && <WarningModal onClose={closeModal} />}
      <Section>
        <LoginForm setLoading={setLoadingState} />
      </Section>
      {isLoading && <Spinner />}
    </Background>
  )
}

export default Welcome
