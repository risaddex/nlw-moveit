import styled, { css } from 'styled-components'
import Link from 'next/link'
import { HomeIcon, RankingIcon } from './Svg'

interface SidebarProps {
  active: ActiveButtonProps
}

const StyledNav = styled.nav<SidebarProps>(
  ({ active }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 100vh;
    width: 100%;
    max-width: 90px;
    box-shadow: ${({ theme }) => theme.shadows.nav};
    background: ${({ theme }) => theme.gradients.nav};

    > div {
      flex: 1;
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      div {
        margin: 0.75rem 0;
        max-height: 50px;
        width: 100%;
        display: flex;

        a {
          display: flex;
          flex: 1;
          padding: 0.75rem;
          align-items: center;
          justify-content: center;
        }
      }
    }
    > a:first-child {
      width: 100%;
      padding: 1rem 0;
      display: flex;
      justify-content: center;
      justify-self: self-start;
    }

    p {
      height: 50px;
      width: 50px;
    }
    span {
      display: block;
      background-color: transparent;

      min-width: 5px;
      min-height: 45px;
      border-radius: 0 5px 5px 0;
    }
    span[role= ${active}] {
      background-color: #5965e0;
    }
  `
)
type ActiveButtonProps = 'home' | 'ranking'

export const Sidebar = ({ active }: { active: ActiveButtonProps }) => {
  const rankingColor = active === 'home' ? '#666666' : '#5965E0'
  const homeColor = active === 'ranking' ? '#666666' : '#5965E0'
  const activeOpacity = (elem: ActiveButtonProps) => (active === elem ? 1 : 0.5)

  return (
    <StyledNav active={active}>
      <>
        <Link href="/">
          <a title="Home">
            <img src="icons/side-logo.svg" alt="home" />
          </a>
        </Link>
      </>
      <div>
        <div>
          <span role="home" />
          <Link href="/app">
            <a title="Home">
              <HomeIcon
                size={32}
                color={homeColor}
                opacity={activeOpacity('home')}
              />
            </a>
          </Link>
        </div>
        <div>
          <span role="ranking" />
          <Link href="/leaderbords">
            <a title="Rankings">
              <RankingIcon
                size={32}
                color={rankingColor}
                opacity={activeOpacity('ranking')}
              />
            </a>
          </Link>
        </div>
      </div>
      <p></p>
    </StyledNav>
  )
}

const Home = styled.svg.attrs({})
