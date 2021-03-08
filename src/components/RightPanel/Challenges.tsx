import { ReactNode } from 'react'
import styled from 'styled-components'

export interface IChallengeProps {
  children?: ReactNode
}

export const ChallengeContainer = styled.div<IChallengeProps>`
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

export const InactiveChallenge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.4;
    max-width: 78%;
    margin-top: 3rem;
  }
`

export const ActiveChallenge = styled.div<IChallengeProps>`
  height: 100%;
  min-width: 80%;
  display: flex;
  flex-direction: column;
`
export const StyledHeader = styled.header`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 1.25rem;
  padding: 0 2rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.title};
`
export const StyledFooter= styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`
export const StyledMain = styled.main`
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
