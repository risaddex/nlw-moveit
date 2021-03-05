import { createContext, ReactNode, useState } from 'react'
import challengeData from '../../challenges.json'
import { Challenge } from '../types';

interface IChallengesProviderProps {
  children?: ReactNode
}

export interface ChallengesContextData {
  level: number
  completedChallenges: number
  currentExp: number
  activeChallenge: Challenge
  experienceToNextLevel: number
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
}


export const challengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: IChallengesProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExp, setCurrentExp] = useState(25)
  const [completedChallenges, setCompletedChallenges] = useState(0)

  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4 , 2)

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challengeData.length)
    const challenge = challengeData[randomChallengeIndex]
    setActiveChallenge(challenge)
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  return (
    <challengesContext.Provider
      value={{
        experienceToNextLevel,
        activeChallenge,
        level,
        levelUp,
        completedChallenges,
        currentExp,
        startNewChallenge,
        resetChallenge
      }}
    >
      {children}
    </challengesContext.Provider>
  )
}
