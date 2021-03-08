import { useContext } from 'react'
import { challengesContext } from '../../context/ChallengesContext'
import { LoadingBar, OuterBar, StyledHeader, StyledTimeBar } from './Styled'

export interface IProgressWidth {
  progress: number
}

export const ExperienceBar = () => {
  const { currentExp, experienceToNextLevel } = useContext(challengesContext)

  const progressPercent = Math.round(currentExp * 100) / experienceToNextLevel

  return (
    <StyledHeader>
      <span>0 xp</span>
      <OuterBar>
        <LoadingBar progress={progressPercent ?? 0.01}>
          <span>
            {currentExp} / {experienceToNextLevel} xp
          </span>
        </LoadingBar>
      </OuterBar>
      <span>{experienceToNextLevel} xp</span>
    </StyledHeader>
  )
}

export const TimeBar = ({ progress }) => {
  return (
    <div>
      <StyledTimeBar progress={progress} />
    </div>
  )
}
