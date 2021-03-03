import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import { Clock } from './Clock'
import styled from 'styled-components';

export const Countdown = () => {
  const [time, setTime] = useState(25 * 60)
  const [active, setActive] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minLeft, minRight] = String(minutes)
    .padStart(2, '0')
    .split('')
  const [secLeft, secRight] = String(seconds)
    .padStart(2, '0')
    .split('')

  useEffect(() => {
    if (time > 0 && active) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
  }, [time, active])

  const toggleCountdown = () => {
    setActive(!active)
  }

  return (
    <div>
      <CountdownContainer>
        <Clock
          minLeft={minLeft}
          minRight={minRight}
          secLeft={secLeft}
          secRight={secRight}
        />
      </CountdownContainer>
      <Button toggleCount={toggleCountdown} />
    </div>
  )
}

const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);
  

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`