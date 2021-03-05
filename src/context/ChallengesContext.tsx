import { createContext, ReactNode, useEffect, useState } from 'react'
import challengeData from '../../challenges.json'
import { Challenge } from '../types'
import Cookies from 'js-cookie'

interface IChallengesProviderProps {
  children: ReactNode
  level: number
  currentExp: number
  challengesCompleted: number
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

export function ChallengesProvider({
  children,
  ...rest
}: IChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExp, setCurrentExp] = useState(rest.currentExp ?? 0)
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  )

  const [activeChallenge, setActiveChallenge] = useState(null)
  //? Fórmula para definir a dificuldade da curva de  nível
  const experienceToNextLevel = Math.pow((level + 1) * 2, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExp', String(currentExp))
    Cookies.set('challengesCompleted', String(challengesCompleted))
  }, [level, currentExp, challengesCompleted])

  function levelUp(levelToUp = 1) {
    setLevel(level + levelToUp)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(
      Math.random() * challengeData.length
    )
    const challenge = challengeData[randomChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio !', {
        body: `Valendo ${challenge.amount}XP`,
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    debugger
    if (!activeChallenge) {
      return
    }

    const { amount } = activeChallenge

    let finalExp = currentExp + amount

    if (finalExp >= experienceToNextLevel) {
      let levelsToUp = 1
      while (finalExp >= experienceToNextLevel) {
        finalExp -= experienceToNextLevel
        setCurrentExp(finalExp)
        levelsToUp++
      }
      levelUp(levelsToUp)
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
