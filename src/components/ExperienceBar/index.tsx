import styled, { css } from 'styled-components'
import { useState, useContext } from 'react'
import { challengesContext } from '../../context/challengesContext'

interface IProgressWidth {
  progress: number
}

export const ExperienceBar = () => {
  const { currentExp, experienceToNextLevel } = useContext(challengesContext)

  const progressPercent = Math.round(currentExp * 100) / experienceToNextLevel

  return (
    <StyledHeader>
      <OuterBar>
        <LoadingBar progress={progressPercent}>
          <span>
            {currentExp}/{experienceToNextLevel} XP
          </span>
        </LoadingBar>
      </OuterBar>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
`

const OuterBar = styled.div`
  flex-grow: 1;
  border: 1px solid gray;
  margin-top: 0.5rem;
`

const LoadingBar = styled.div<IProgressWidth>(
  ({ progress }) => css`
    background-color: rgba(16, 185, 129, 1);
    border-radius: 5px;
    height: 2.5rem;
    width: ${progress}%;
    span {
      position: absolute;
      left: 50%;
      /* top: 6.25%; */
      transform: translateX(0, 50%);
    }
  `
)
