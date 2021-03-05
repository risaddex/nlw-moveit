import styled from 'styled-components'
import { Button } from './Button'

export const ChallengeButton = styled(Button)<{ success?: boolean }>`
  height: 3rem;

  margin: 0;
  font-size: 1rem;

  transition: filter 0.5s;

  color: ${({ theme }) => theme.colors.white};

  background: ${({ success }) =>
    success
      ? ({ theme }) => theme.colors.success
      : ({ theme }) => theme.colors.danger};

  &:hover {
    filter: brightness(0.9)
  }
`
