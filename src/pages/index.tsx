import { useRouter } from 'next/router'
import { useState } from 'react'
import styled from 'styled-components'
import GitHubCorner from '../components/GitHubCorner'
import { LoginForm } from '../components/LoginForm/index'
import { Spinner } from '../components/LoginForm/Loading'
import { WarningModal } from '../components/Modal'
import { Section } from '../components/Section/index'

const Background = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  height: 100vh;
  width: 100%;
  max-width: 1280px;
  padding: 2rem;
  background: url('bg.svg') no-repeat;
  background-size: 50%;
  background-position: left center;
  background-color: ${({ theme }) => theme.colors.primary};

  @media only screen and (max-width: 768px) {
    /* position: fixed; */
    display:flex;
    align-items:center;
    justify-content:center;
    background-size:120%;
    background-attachment:scroll;
  }
`

const Welcome = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(true)
  const router = useRouter()

  const closeModal = () => setIsModalOpen(false)

  const setLoadingState = () => {
    setIsLoading(true)
  }

  return (
    <>
      <GitHubCorner
        current="app"
        projectUrl="https://github.com/risaddex/nlw-moveit"
      />
      <Background>
        {isModalOpen && <WarningModal onClose={closeModal} />}
        <Section>
          <LoginForm setLoading={setLoadingState} />
        </Section>
        {isLoading && <Spinner />}
      </Background>
    </>
  )
}

export default Welcome
