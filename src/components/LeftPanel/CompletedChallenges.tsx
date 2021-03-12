import styled from 'styled-components'
import { useContext } from 'react'
import { challengesContext } from '../../context/ChallengesContext'
import { LanguageContext } from '../../context/LanguageContext'

export const ProfileInfo = () => {
  const { challengesCompleted } = useContext(challengesContext)
  const { data } = useContext(LanguageContext)

  return (
    <ChallengeBox>
      <Completed>{data.challenges.totalCompleted}</Completed>
      <Number>{challengesCompleted}</Number>
    </ChallengeBox>
  )
}

const ChallengeBox = styled.div`
  margin: 2.5rem 0;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid;
  border-color: ${({ theme }) => theme.colors.gray};

  @media only screen and (max-width: 768px) {
    margin-top:3rem;
    margin-bottom: 2rem;
  }
`

const Completed = styled.span`
  font-size: 1.125rem /* 18px */;
  line-height: 1.75rem /* 28px */;
`
const Number = styled.span`
  font-size: 1rem /* 18px */;
  line-height: 1.25rem /* 28px */;
`
