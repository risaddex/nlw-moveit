import { createContext, ReactNode, useEffect, useState } from 'react'
import challengeData from '../../challenges.json'
import { Challenge } from '../types'

interface IChallengesProviderProps {
  children?: ReactNode
}

export interface ChallengesContextData {
  level: number
  challengesCompleted: number
  currentExp: number
  activeChallenge: Challenge
  experienceToNextLevel: number
  completeChallenge: () => void
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
}

export const challengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: IChallengesProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExp, setCurrentExp] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)

  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(
      Math.random() * challengeData.length
    )
    const challenge = challengeData[randomChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted')  {
      new Notification('Novo desafio !', {
        body: `Valendo ${challenge.amount}XP`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return
    }

    const { amount } = activeChallenge

    let finalExp = currentExp + amount

    if (finalExp >= experienceToNextLevel) {
      finalExp -= experienceToNextLevel
      levelUp()
    }

    setCurrentExp(finalExp)
    setChallengesCompleted(challengesCompleted + 1)
    setActiveChallenge(null)
  }

  return (
    <challengesContext.Provider
      value={{
        experienceToNextLevel,
        activeChallenge,
        level,
        levelUp,
        challengesCompleted,
        completeChallenge,
        currentExp,
        startNewChallenge,
        resetChallenge,
      }}
    >
      {children}
    </challengesContext.Provider>
  )
}
