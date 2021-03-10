import styled from 'styled-components';

export const Modal = styled.div`
  background: rgba(242, 243, 245, 0.8);
  backdrop-filter: blur(2px); //! :O
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    z-index: 20;
  }
`

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 400px;
  
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.main};
  text-align: center;
  position: relative;
  
`
export const ModalHeader = styled.header`
  font-size: 8.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  background: url('/icons/levelup.svg') no-repeat center;
  background-size: contain;
`
export const ModalTitle = styled.strong`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.title};
  
`

export const ModalMain = styled.main`
  padding: 2rem 3rem;
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;

  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.nav};
  text-align: center;
  position: relative;
`
export const ModalText = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 0.25rem;
  
`
export const ModalButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: 0; //! Nice hack :)
`

export const ModalLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;

  background-color: #f5fcff;
  color: #2aa9e0;
  font-weight: 600;
  border-radius: 0 0 5px 5px;

  > span {
    padding-left: 1rem;

  }

  &:hover {
    background-color: #2aa9e0;
    color: #f5fcff;
    transition: background 0.3s;

    path {
      fill: white;
    }
  }

  /* cursor: pointer; */
`