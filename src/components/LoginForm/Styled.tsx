import styled from 'styled-components';
import { ActiveChallenge } from '../RightPanel/Styled';

export const Form = styled(ActiveChallenge)`
  background-color: inherit;
  h3 {
    color: ${({ theme }) => theme.colors.text};
  }
`
export const StyledForm = styled.div`
  grid-column: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 80%;
  min-width: 350px;
  height: 60vh;
  min-height: 400px;
  margin-right: 3rem;
  cursor: default;

  @media only screen and (max-width: 768px) {
    min-height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    margin: 0;
  }

  @media only screen and (max-height: 400px) {
    header {
      margin: 2rem;
    }
    h3 {
      display: none;
    }
    input,
    button {
      min-height: 5rem;
      margin-bottom: 2rem;
    }
  }
`

export const FormHeader = styled.header`
  flex: 1;
  min-height: 20%;
  border: none;
  background: url('/logo.svg') no-repeat;
  background-position: left top;
  background-size: contain;

  @media only screen and (max-width: 768px) {
    flex: 1;
    margin-top: 5rem;
    max-height: 15%;
  }
`

export const FormMain = styled.main`
  flex: 1;
  display: grid;
  grid-template-rows: 1fr 1fr;

  gap: 1rem;
  align-items: center;

  @media only screen and (max-width: 768px) {
    gap: 0;
    flex: 1;
    max-height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  h3 {
    font-size: 2rem;
    color: white;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      max-width: calc(100% / 6);
      height: auto;
    }

    p {
      padding: 1rem;
      flex: 1;
      text-align: left;
      font-size: 1.25rem;
      color: white;
    }
  }
`

export const FormFooter = styled.form`
  flex: 1;
  display: flex;
  height: 4rem;

  input {
    flex: 1;
    background: ${({ theme }) => theme.gradients.dark};
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1rem;
    padding: 0 1.25rem;

    outline: none;
    border: none;
    border-radius: 5px 0 0 5px;

    &:focus {
      border: 3px solid ${({ theme }) => theme.colors.darkPrimary};
      border-right: none;
      ::placeholder {
        color: transparent;
      }
    }

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }

    @media only screen and (max-width: 768px) {
      max-height: 5rem;
      flex: 1;
    }
  }

  button {
    min-width: 5rem;
    max-width: 20%;
    background: url('/icons/arrow.svg') no-repeat;
    background-position: center;
    background-color: ${({ theme }) => theme.colors.darkPrimary};

    outline: none;
    border: none;
    transition: background-color 0.3s;
    border-radius: 0 5px 5px 0;

    &:hover {
      background-color: ${({ theme }) => theme.colors.success};
      cursor: pointer;
    }
    &:disabled {
      cursor: not-allowed;

      &:hover {
        background-color: ${({ theme }) => theme.colors.danger};
      }
    }

    @media only screen and (max-width: 768px) {
      flex: 1;
      max-height: 5rem;
    }
  }
`
