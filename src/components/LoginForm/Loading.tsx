import styled from 'styled-components'

export const Spinner = styled.div`
  position: absolute;
  top: calc(50% - 35px);
  left: calc(50% - 35px);
  margin-bottom: 10px;
  border: 10px solid #f3f3f3;
  border-top: 10px solid ${({ theme }) => theme.colors.success};
  
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
