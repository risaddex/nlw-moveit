import styled from 'styled-components'

export const StyledWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 2.5rem 5rem 0 5rem;

  height: 100vh;
  width: 100%;
  max-width: 1280px;

  @media only screen and (max-width: 767px) {
    padding: 0;
    margin: 0;
    max-height: 80vh;
  }
`

export const Wrapper = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
)