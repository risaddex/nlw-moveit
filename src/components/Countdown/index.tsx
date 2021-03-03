import React, { useEffect, useState } from 'react'

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
    <>
      <Clock
        minLeft={minLeft}
        minRight={minRight}
        secLeft={secLeft}
        secRight={secRight}
      />
      <Button toggleCount={toggleCountdown} />
    </>
  )
}

const Clock = ({ minLeft, minRight, secLeft, secRight }) => {
  return (
    <div className="container flex items-center justify-evenly font-raj font-semibold">
      <div className="flex-grow flex justify-center shadow-md rounded lg:text-9xl text-8xl">
        <div className="count-container">
          <span>{minLeft}</span>
          <span>{minRight}</span>
        </div>
        <span className="px-5">:</span>
        <div className="count-container">
          <span>{secLeft}</span>
          <span>{secRight}</span>
        </div>
      </div>
    </div>
  )
}

const Button = ({ toggleCount }) => (
  <button
    type="button"
    onClick={toggleCount}
    className="text-white text-lg rounded-md w-full h-14 flex mt-8 justify-center items-center bg-blue-500 hover:bg-blue-800 transition"
  >
    Start a cycle
  </button>
)
