import styled, { css } from 'styled-components'
import { useState } from 'react'

interface IProgressWidth {
  progress: number
}

export const ExperienceBar = () => {
  const [progress, setProgress] = useState(75)

  return (
    <StyledHeader>
      <OuterBar>
        <LoadingBar progress={progress}>
          <span>50/100 xp</span>
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
  border: 1px;
  margin-top: 0.5rem;
`

const LoadingBar = styled.div<IProgressWidth>(
  ({ progress }) => css`
    background-color: rgba(16, 185, 129, 1);
    height: 1.5rem;
    border-radius: 5px;
    width: ${progress}%;
    span {
      position: absolute;
      left: 50%;
      transform: translateX(0, 50%);
    }
  `
)
