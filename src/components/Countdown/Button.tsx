import styled from "styled-components";

interface ButtonProps  {
  type: 'submit' | 'button'
  children: string
}

const StyledButton = styled.button<ButtonProps>`
  color: white;
  background-color: rgba(59, 130, 246,1);
  font-size: 1.5rem;
  border-radius: 7px;
  width: 100%;
  height: 3.5rem;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  outline: 0;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.5s;

  &:hover {
     background-color: rgba(30, 64, 175, 1)
  }
`

export const Button = ({ toggleCount }) => (
  <StyledButton type="button" onClick={toggleCount}>
    Start a cycle
  </StyledButton>
)
