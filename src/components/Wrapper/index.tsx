import styled from 'styled-components'

export const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  
  display: flex;
  flex-direction: column;
`

export const Wrapper = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
)