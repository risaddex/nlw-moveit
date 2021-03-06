import React, { useContext } from 'react'
import styled from 'styled-components'
import { CountdownContext } from '../../context/CountdownContext'
import { ActiveButton, Button } from '../Buttons'
import { Clock } from './Clock'

export const Countdown = () => {
  const {
    hasFinished,
    isActive,
    minutes,
    resetCountdown,
    seconds,
    startCountdown,
  } = useContext(CountdownContext)

  const [minLeft, minRight] = String(minutes).padStart(2, '0').split('')
  const [secLeft, secRight] = String(seconds).padStart(2, '0').split('')

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
        <Button disabled>Ciclo encerrado</Button>
      ) : (
        <ActiveButton
          type="button"
          onClick={isActive ? resetCountdown : startCountdown}
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
