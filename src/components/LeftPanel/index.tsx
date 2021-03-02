import { Countdown } from "../Countdown"
import { CompletedChallenges } from "./CompletedChallenges"
import { Profile } from "./Profile"

export const LeftPanel = () => {
  return (
    <div className=" container flex flex-col">
      <Profile />
      <CompletedChallenges />
      <Countdown />
    </div>
  )
}

