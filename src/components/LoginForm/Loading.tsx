import styled from 'styled-components'

const LoadingSpinner = styled.div`
  position: absolute;
  top: calc(50% - 35px);
  left: calc(50% - 35px);
  margin-bottom: 10px;
  border: 10px solid #f3f3f3;
  border-top: 10px solid ${({ theme }) => theme.colors.progress};

  text-shadow: black;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 0.9s linear infinite;
  display: block;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
const SpinnerContainer = styled.div`
  background: rgba(242, 243, 245, 0.1);
  backdrop-filter: blur(4px); //! :O
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <LoadingSpinner aria-hidden="true"/>
    </SpinnerContainer>
  )
}