import styled from 'styled-components'
import { Button } from './Button'

export const ChallongeButton = styled(Button)<{ success?: boolean }>`
  height: 3rem;
  width: 100%;
  margin: 0;
  font-size: 1.25rem;
  outline: none;
  transition: filter 0.5s;

  color: ${({ theme }) => theme.colors.white};

  background: ${({ success }) =>
    success
      ? ({ theme }) => theme.colors.success
      : ({ theme }) => theme.colors.danger};

  &:hover {
    filter: brightness(0.9);
  }
`
export const ChallengeButton = styled.div<{ success?: boolean }>`
  flex: 1;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  font-weight: 600;

  color: ${({ success }) =>
    success
      ? ({ theme }) => theme.colors.success
      : ({ theme }) => theme.colors.danger};

  background: ${({ success }) => (success ? '#F7FFF5' : '#FFF5F5')};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ success }) =>
      success
        ? ({ theme }) => theme.colors.success
        : ({ theme }) => theme.colors.danger};

    transition: background 0.3s;
  }
`