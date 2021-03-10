import { Sidebar } from '../components/Layout/Sidebar'
import { Ranking } from '../components/Layout/Ranking';

const Leaderboard = () => {
  return (
    <>
      <Sidebar active="ranking" />
      <Ranking />
    </>
  )
}

export default Leaderboard
