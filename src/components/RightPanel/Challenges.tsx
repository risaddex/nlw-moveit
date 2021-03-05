import { FC } from 'react'
import styled, { StyledFunction } from 'styled-components'

const ChallengeContainer = styled.div`
  height: 100%;

  background: white;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.main};
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`

const InactiveChallenge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1.4;
    max-width: 78%;
    margin-top: 3rem;
  }
`

const ActiveChallenge = styled.div`
  height: 100%;
  min-width: 80%;
  display: flex;
  flex-direction: column;
`
ActiveChallenge.Header = styled.header`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 600;
  font-size: 1.25rem;
  padding: 0 2rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.title};
`
ActiveChallenge.Footer = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`
ActiveChallenge.Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.title};
    margin: 1.5rem 0 1rem;
  }

  p {
    line-height: 1.5;
  }
`
export { ChallengeContainer, ActiveChallenge, InactiveChallenge }
