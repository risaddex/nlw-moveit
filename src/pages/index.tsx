import { useState, useEffect } from 'react'
import styled from 'styled-components'
import GitHubCorner from '../components/GitHubCorner'
import { LoginForm } from '../components/LoginForm/index'
import { Spinner } from '../components/LoginForm/Loading'
import { WarningModal } from '../components/Modal'
import { Section } from '../components/Section/index'
import { useRouter } from 'next/router'
import { ChallengesProvider } from '../context/ChallengesContext'
import { Toggler } from '../components/Buttons'

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
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: 120%;
    background-attachment: scroll;
  }
`

const Welcome = ({ themeToggler, theme }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [hasError, setHasError] = useState(false)

  const router = useRouter()

  useEffect(() => {
    if (router.query.fail === 'true') {
      setIsLoading(false)
      window.history.replaceState(null, '', '/')
      setHasError(true)
    }
  }, [router.query])

  const closeModal = () => {
    setIsModalOpen(false)
    setHasError(false)
  }

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
        <Toggler currentTheme={theme} toggleTheme={themeToggler} />
        {isModalOpen && (
          <WarningModal onClose={closeModal} title="Atenção">
            <br />
            Este App é um clone com finalidade única e exclusivamente didática.
            <br />
            Moveit possui todos os direitos reservados sobre seu logotipo e
            imagem.
          </WarningModal>
        )}
        <Section>
          <LoginForm hasError={hasError} setLoading={setLoadingState} />
        </Section>
        {isLoading && <Spinner />}
      </Background>
    </>
  )
}

export default Welcome
