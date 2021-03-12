import styled from 'styled-components'
import {
  Modal,
  ModalButton,
  ModalContainer,
  ModalMain,
  ModalText,
  ModalTitle,
} from '../Modal/Modal'
import { LanguageToggler, ThemeToggler } from './Toggler'
import { useContext, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext'

const ConfigButton = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 20px;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};  
  background: ${({ theme }) => theme.colors.darkPrimary};
  box-shadow: ${({ theme }) => theme.shadows.main};
  cursor: pointer;
  z-index: 20;

  @media only screen and (max-width: 768px) {
    top: 0;
    margin: 10px;
    width: 45px;
    height: 45px;
  }
`

const OptionsDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 20;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Options = ({ themeToggler, theme }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const { data, toggleLanguage } = useContext(LanguageContext)

  const closeOptions = () => setIsOptionsOpen(false)
  const openOptions = () => setIsOptionsOpen(true)

  return (
    <>
      <ConfigButton title="options" onClick={openOptions}>
        ⚙
      </ConfigButton>
      {isOptionsOpen && (
        <Modal style={{ zIndex: 20 }}>
          <ModalContainer>
            <ModalMain>
              <ModalTitle>{data.config.title}</ModalTitle>
              <OptionsDiv>
                <div>
                  <ModalText>{data.config.theme}</ModalText>
                  <ThemeToggler
                    currentTheme={theme}
                    toggleTheme={themeToggler}
                  />
                </div>
                <div>
                  <ModalText>{data.config.language}</ModalText>
                  <LanguageToggler toggleLanguage={toggleLanguage} />
                </div>
              </OptionsDiv>
              <ModalButton type="button" onClick={closeOptions}>
                <img src="/icons/close.svg" alt="fechar modal" />
              </ModalButton>
            </ModalMain>
          </ModalContainer>
        </Modal>
      )}
    </>
  )
}
