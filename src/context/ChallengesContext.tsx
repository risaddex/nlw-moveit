import Cookies from 'js-cookie'
import { createContext, ReactNode, useEffect, useState } from 'react'
import challengeData from '../../challenges.json'
import { LevelUpModal } from '../components'
import { Challenge, User } from '../types'

const EXPCURVERATIO: number = 4
interface IChallengesProviderProps {
  children: ReactNode
  userData: User
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
  closeModal: () => void
  currentUser: User
}

export const challengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({
  children,
  ...rest
}: IChallengesProviderProps) {
  const [currentUser, setCurrentUser] = useState(rest.userData ?? null)
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExp, setCurrentExp] = useState(rest.currentExp ?? 0)
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)
  const [isLoading, setIsLoading] = useState(false)
  const [activeChallenge, setActiveChallenge] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const experienceToNextLevel = Math.pow((level + 1) * EXPCURVERATIO, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set(`${currentUser.id}_level`, String(level))
    Cookies.set(`${currentUser.id}_currentExp`, String(currentExp))
    Cookies.set(`${currentUser.id}_challengesCompleted`, String(challengesCompleted))
  }, [level, currentExp, challengesCompleted])

  function levelUp(levelToUp = 1) {
    setLevel(level + levelToUp)
    setIsModalOpen(true)
  }

  function closeModal() {
    if (!isModalOpen) return

    setIsModalOpen(false)
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
    if (!activeChallenge) {
      return
    }

    const { amount } = activeChallenge

    let finalExp = currentExp + amount

    if (finalExp >= experienceToNextLevel) {
      let levelsToUp = 0
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
        currentUser,
        currentExp,
        level,
        experienceToNextLevel,
        activeChallenge,
        challengesCompleted,
        levelUp,
        completeChallenge,
        startNewChallenge,
        resetChallenge,
        closeModal,
      }}
    >
      {children}
      {isModalOpen && <LevelUpModal />}
    </challengesContext.Provider>
  )
}
