import styled from 'styled-components'

const RankingContainer = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 0 auto;
`

const RankingTable = styled.main`
  margin-bottom: 10px;
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    

    :first-child {
      margin-right: 10px;
    }
  }
  .number {
    grid-area: num;
  }

  .user {
    grid-area: user;
  }

  .challenges {
    grid-area: chall;
  }

  .exp {
    grid-area: exp;
  }

  flex: 1;
  width: 100%;
  max-width: 960px;
  display: grid;
  grid-template-areas: 'num user user user user chall chall exp exp';
  grid-auto-columns: 1fr;
  grid-auto-rows:96px;
`

export const Ranking = () => {
  return (
    <RankingContainer>
      <RankingTable>
        <div className="number">2</div>
        <div className="user">user 2</div>
        <div className="challenges">127 completados</div>
        <div className="exp">120000xp</div>
      </RankingTable>
      <RankingTable>
        <div className="number">2</div>
        <div className="user">user 2</div>
        <div className="challenges">127 completados</div>
        <div className="exp">120000xp</div>
      </RankingTable>
      <RankingTable>
        <div className="number">2</div>
        <div className="user">user 2</div>
        <div className="challenges">127 completados</div>
        <div className="exp">120000xp</div>
      </RankingTable>
      <RankingTable>
        <div className="number">2</div>
        <div className="user">user 2</div>
        <div className="challenges">127 completados</div>
        <div className="exp">120000xp</div>
      </RankingTable>
      <RankingTable>
        <div className="number">2</div>
        <div className="user">user 2</div>
        <div className="challenges">127 completados</div>
        <div className="exp">120000xp</div>
      </RankingTable>
      
    </RankingContainer>
  )
}
