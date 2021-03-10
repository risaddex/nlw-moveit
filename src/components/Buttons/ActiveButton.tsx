import styled from 'styled-components'
import { Button } from './Button'

export const ActiveButton = styled(Button)<{ isActive: boolean }>`
  outline: none;
  position: relative;

  background: ${({ isActive }) =>
    isActive
      ? ({ theme }) => theme.colors.white
      : ({ theme }) => theme.colors.primary};

  color: ${({ isActive }) =>
    isActive
      ? ({ theme }) => theme.colors.title
      : ({ theme }) => theme.colors.white};

  &:hover {
    color: white;

    background: ${({ isActive }) =>
      isActive
        ? ({ theme }) => theme.colors.danger
        : ({ theme }) => theme.colors.darkPrimary};

    > div { //?progress Bar
      display: none;

      @media only screen and (max-width: 768px) {
        display: initial;
      }
    }
  }
`
