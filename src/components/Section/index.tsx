import styled from 'styled-components'

export const StyledSection = styled.section`
  flex: 1;
  min-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.25rem;
  align-content: center;

  @media only screen and (max-width: 768px) {
    height: 80%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
    gap: 0;
  }

  
`

export const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>
}
