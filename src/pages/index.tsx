import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Toggler } from '../components/Buttons'
import { Options } from '../components/Buttons/ConfigButton'
import GitHubCorner from '../components/GitHubCorner'
import { LoginForm } from '../components/LoginForm/index'
import { Spinner } from '../components/LoginForm/Loading'
import { WarningModal } from '../components/Modal'
import { Section } from '../components/Section/index'
import { LanguageContext } from '../context/LanguageContext'

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
  const { data } = useContext(LanguageContext)

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
      <Options theme={theme} themeToggler={themeToggler} />
      <Background>
        {isModalOpen && (
          <WarningModal onClose={closeModal} title={data.warning[0]}>
            <br />
            {data.warning[1]}
            <br />
            {data.warning[2]}
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
