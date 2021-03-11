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

  @media only screen and (max-width: 768px) {
    padding: 0.5rem;
  }
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
      margin-right: 1vh;
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

  @media only screen and (max-width: 768px) {
    grid-template-areas: 'num user user chall chall exp exp';
    text-align:center;
  }
`

export const Ranking = () => {
  return (
    <RankingContainer>
      <RankingTable>
        <div className="number">1</div>
        <div className="user">
          <p>Loren Ipsun</p>
        </div>
        <div className="challenges">
          <p>127 completados</p>
        </div>
        <div className="exp">120000xp</div>
      </RankingTable>
      <RankingTable>
        <div className="number">2</div>
        <div className="user">Fooooo Baaaaar</div>
        <div className="challenges">127 completados</div>
        <div className="exp">120000xp</div>
      </RankingTable>
      <RankingTable>
        <div className="number">3</div>
        <div className="user">Pepega 123</div>
        <div className="challenges">127 completados</div>
        <div className="exp">120000xp</div>
      </RankingTable>
      <RankingTable>
        <div className="number">4</div>
        <div className="user">John Doe</div>
        <div className="challenges">127 completados</div>
        <div className="exp">120000xp</div>
      </RankingTable>
      <RankingTable>
        <div className="number">5</div>
        <div className="user">Nobody</div>
        <div className="challenges">127 completados</div>
        <div className="exp">120000xp</div>
      </RankingTable>
    </RankingContainer>
  )
}
