import styled from "styled-components";

interface ButtonProps  {
  type: 'submit' | 'button'
  children: string
}

const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: ${({ theme: { colors: { blue }}}) => blue };
  color: ${({ theme: { colors: { white }}}) => white };
  
  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.5s;

  &:hover {
    background-color: ${({ theme: { colors: { darkBlue }}}) => darkBlue };
    cursor: pointer;
  }
`

export const Button = ({ toggleCount }) => (
  <StyledButton type="button" onClick={toggleCount}>
    Start a cycle
  </StyledButton>
)
