import styled from 'styled-components';

const StyledNav = styled.nav`
flex: 1;
min-height: 100vh;
width: 100%;
max-width: 5rem;
background-color: ${({ theme }) => theme.colors.primary};

`

export const Sidebar = () => {
  return (
    <StyledNav>
      a
    </StyledNav>
  )
}