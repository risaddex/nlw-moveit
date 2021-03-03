import styled from 'styled-components'

export const Wrapper = ({ children }) => (
  <StyledWrapper>
    {children}
  </StyledWrapper>
)

const StyledWrapper = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  
  display: flex;
  flex-direction: column;
`
