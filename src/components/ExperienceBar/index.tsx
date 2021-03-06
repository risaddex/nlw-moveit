import { useContext } from 'react'
import styled, { css } from 'styled-components'
import { challengesContext } from '../../context/ChallengesContext'

interface IProgressWidth {
  progress: number
}

export const ExperienceBar = () => {
  const { currentExp, experienceToNextLevel } = useContext(challengesContext)

  const progressPercent = Math.round(currentExp * 100) / experienceToNextLevel

  return (
    <StyledHeader>
      <span>0 EXP</span>
      <OuterBar>
        <LoadingBar progress={progressPercent}>
          <span>
            {currentExp} / {experienceToNextLevel} EXP
          </span>
        </LoadingBar>
      </OuterBar>
      <span>{experienceToNextLevel} EXP</span>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  > span {
    display: flex;
    padding: 0 0.25rem;
    align-self: center;
  }
`

const OuterBar = styled.div`
  flex-grow: 1;
  border: 1px solid gray;
  border-radius: 5px;
`

const LoadingBar = styled.div<IProgressWidth>(
  ({ progress }) => css`
    background-color: rgba(16, 185, 129, 1);
    border-radius: 5px;
    height: 0.5rem;
    width: ${progress}%;

    span {
      position: absolute;
      left: 50%;
      top: 3.5rem;
      transform: translateX(0, 50%);
    }
  `
)
