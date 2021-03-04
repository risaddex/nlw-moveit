import styled from 'styled-components'
import { Button } from './Button'

export const ActiveButton = styled(Button)<{ isActive: boolean }>`
  background: ${({ isActive }) =>
    isActive
      ? ({ theme }) => theme.colors.white
      : ({ theme }) => theme.colors.blue};

  color: ${({ isActive }) =>
    isActive
      ? ({ theme }) => theme.colors.title
      : ({ theme }) => theme.colors.white};

  &:hover {
    background: ${({ isActive }) =>
      isActive
        ? ({ theme }) => theme.colors.red
        : ({ theme }) => theme.colors.darkBlue};
  }

`
