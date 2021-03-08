import styled, { css } from 'styled-components';
import { IProgressWidth, TimeBar } from './index';

export const StyledHeader = styled.header`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  > span {
    display: flex;
    padding: 0 0.25rem;
    align-self: center;
  }
`

export const OuterBar = styled.div`
  margin: 0 0.5rem;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
`

export const LoadingBar = styled.div<IProgressWidth>(
  ({ progress }) => css`
    background-color: ${({ theme }) => theme.colors.success};
    border-radius: 5px;
    height: 0.5rem;
    width: ${progress}%;

    span {
      position: absolute;
      left: 50%;
      top: 3.5rem;
      transform: translateX(0, 50%);
    }
  `
)

export const StyledTimeBar = styled(LoadingBar)`
  flex: 0;
  position: absolute;
  height: 4px;
  left: 0;
  bottom: 0;
`
