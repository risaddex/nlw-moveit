import styled, { css } from 'styled-components'
import { IProgressWidth } from './index'

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

  @media only screen and (max-width: 768px) {
    position: fixed;
    top: calc(20vh - 1rem);

    > span:first-child {
      display: none;
    }
    > span:last-child {
      display: none;
    }
  }
`

export const OuterBar = styled.div`
  margin: 0 0.5rem;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 5px;

  @media only screen and (max-width: 768px) {
    position: relative;
    text-align: center;
    margin: 0;
    border-radius: 50px;
    margin: 0 0.25rem;
  }
`

export const LoadingBar = styled.div<IProgressWidth>(
  ({ progress }) => css`
    background-color: ${({ theme }) => theme.colors.progress};
    border-radius: 5px;
    height: 0.5rem;
    width: ${progress}%;
    transition: width 1s;

    span {
      position: absolute;
      left: 50%;
      top: 3.5rem;
      transform: translateX(0, 50%);
      @media only screen and (max-width: 768px) {
        font-size: 2vmax;
        position: fixed;
        top: calc(20vh - 1rem);
        left: calc(50% - 1.5rem);
      }
    }

    @media only screen and (max-width: 768px) {
      border-radius: 50px;
      height: 1.5vh;
      margin: 0.25rem;
    }
  `
)

export const StyledTimeBar = styled(LoadingBar)`
  flex: 0;
  position: absolute;
  height: 4px;
  left: 0;
  bottom: 0;
  margin:0;
`
