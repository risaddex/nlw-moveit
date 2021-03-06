import styled from 'styled-components';

const StyledNav = styled.nav`
flex: 1;
display: flex;
min-height: 100vh;
width: 100%;
max-width: 100px;
background-color: ${({ theme }) => theme.colors.primary};

`

export const Sidebar = () => {
  return (
    <StyledNav>
      a
    </StyledNav>
  )
}