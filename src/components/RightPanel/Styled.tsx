import { ReactNode } from 'react'
import styled from 'styled-components'

export interface IChallengeProps {
  children?: ReactNode
  mobile?: boolean
}

export const ChallengeContainer = styled.div<IChallengeProps>`
  height: 100%;
  background: white;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
  }
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

  @media only screen and (max-width: 768px) {
    display:none;
  }
`

export const ActiveChallenge = styled.div<IChallengeProps>`
  height: 100%;
  min-width: 80%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    padding: 0 5px;
    margin: 5vh 0;
    border-radius: 5px;
    text-align: justify;
  }
  @media only screen and (max-width: 768px) {
    max-height: 100vh;
  }
`
export const StyledHeader = styled.header`
  flex: 1;
  min-height: 16%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 1.25rem;
  margin: 0 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  @media only screen and (max-width: 768px) {
    min-height:0;
    max-height: 15%;
  }
`
export const StyledFooter = styled.footer`
  min-height: 16%;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    border-radius: 0 0px 5px 0px;
    &:first-child {
      border-right: 1px solid ${({ theme }) => theme.colors.gray};
      border-radius: 0 0px 0px 5px;
    }
  }
  @media only screen and (max-width: 768px) {
    max-height: 20%;
  }
`
export const StyledMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 3rem;
  color: ${({ theme }) => theme.colors.text};

  strong {
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.title};
    margin: 1.5rem 0 1rem;
  }

  p {
    line-height: 1.5;
  }

  @media only screen and (max-width: 768px) {
    max-height:60%;
  }
`
