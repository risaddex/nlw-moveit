import styled from 'styled-components'

export const StyledSection = styled.section`
  flex: 1;
  min-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.25rem;
  align-content: center;
`

export const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>
}
