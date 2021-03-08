import styled from 'styled-components'
import { useContext } from 'react'
import { challengesContext } from '../../context/ChallengesContext'

export const ProfileInfo = () => {
  const { challengesCompleted } = useContext(challengesContext)

  return (
    <ChallengeBox>
      <Completed>Completed Challenges</Completed>
      <Number>{challengesCompleted}</Number>
    </ChallengeBox>
  )
}

const ChallengeBox = styled.div`
  margin: 2.5rem 0 ;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid;
  border-color: ${({ theme }) => theme.colors.gray};
  ;
`

const Completed = styled.span`
  font-size: 1.125rem /* 18px */;
  line-height: 1.75rem /* 28px */;
`
const Number = styled.span`
  font-size: 1rem /* 18px */;
  line-height: 1.25rem /* 28px */;
`
