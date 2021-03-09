import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react'
import { challengesContext } from './ChallengesContext'

interface CountdownContextData {
  time: number
  DEFAULT_TIME: number
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  startCountdown: () => void
  resetCountdown: () => void
}

interface CountdownProviderProps {
  children: ReactNode
}

let countdownTimeout: NodeJS.Timeout
// PADRÂO é 25 MINUTOS
const DEFAULT_TIME = 0.1 * 60

export const CountdownContext = createContext({} as CountdownContextData)
export const CountdownProvider = ({ children }: CountdownProviderProps) => {
  const { startNewChallenge } = useContext(challengesContext)
  const [time, setTime] = useState(DEFAULT_TIME)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  useEffect(() => {
    if (time > 0 && isActive) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [time, isActive])

  const startCountdown = () => {
    setIsActive(true)
  }

  const resetCountdown = () => {
    setTime(DEFAULT_TIME)
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setHasFinished(false)
  }

  return (
    <CountdownContext.Provider
      value={{
        time,
        DEFAULT_TIME,
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
