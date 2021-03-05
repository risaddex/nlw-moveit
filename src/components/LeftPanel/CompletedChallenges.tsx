import styled from 'styled-components'
import { useContext } from 'react';
import { challengesContext } from '../../context/challengesContext';

export const ProfileInfo = () => {
  const { completedChallenges} = useContext(challengesContext)

  return (<ChallengeBox>
    <Completed>Completed Challenges</Completed>
    <Number>{completedChallenges}</Number>
  </ChallengeBox>)
}

const ChallengeBox = styled.div`
  padding: 1.25rem;
  color: rgba(75, 85, 99, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px;
  border-color: darkgray;
`

const Completed = styled.span`
  font-size: 1.125rem /* 18px */;
  line-height: 1.75rem /* 28px */;
`
const Number = styled.span`
  font-size: 1rem /* 18px */;
  line-height: 1.25rem /* 28px */;
`
