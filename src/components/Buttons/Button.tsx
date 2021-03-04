import styled from 'styled-components'

export const Button = styled.button<{ disabled?: boolean}>`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  border: 0;
  border-radius: 5px;

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.5s;

  &:disabled {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};
    box-shadow: ${({ theme }) => theme.shadows.main };
    cursor: not-allowed;
  }
`
