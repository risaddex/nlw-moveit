import React, { useContext, useEffect, useState } from 'react'
import { ActiveButton } from '../Buttons'
import { Clock } from './Clock'
import styled from 'styled-components'
import { Button } from '../Buttons'
import { challengesContext } from '../../context/challengesContext';

let countdownTimeout: NodeJS.Timeout

export const Countdown = () => {
  const { startNewChallenge } = useContext(challengesContext)

  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minLeft, minRight] = String(minutes).padStart(2, '0').split('')
  const [secLeft, secRight] = String(seconds).padStart(2, '0').split('')

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

  const toggleCountdown = () => {
    setIsActive(true)
  }

  const resetCountdown = () => {
    setTime(0.1 * 60)
    clearTimeout(countdownTimeout)
    setIsActive(false)
  }

  return (
    <>
      <CountdownContainer>
        <Clock
          minLeft={minLeft}
          minRight={minRight}
          secLeft={secLeft}
          secRight={secRight}
        />
      </CountdownContainer>

      {hasFinished ? (
        <Button disabled>Ganho mizeravi</Button>
      ) : (
        <ActiveButton
          type="button"
          onClick={isActive ? resetCountdown : toggleCountdown}
          isActive={isActive}
        >
          {isActive ? 'Abandonar Ciclo' : 'Iniciar um Ciclo'}
        </ActiveButton>
      )}
    </>
  )
}

const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${({
    theme: {
      colors: { title },
    },
  }) => title};

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${({
      theme: {
        colors: { white },
      },
    }) => white};

    box-shadow: ${({
      theme: {
        shadows: { main },
      },
    }) => main};

    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    > span {
      flex: 1;

      &:first-child {
        border-right: 1px solid #f0f1f3;
      }
      &:last-child {
        border-left: 1px solid #f0f1f3;
      }
    }
  }
`
