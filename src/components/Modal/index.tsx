import { Modal, ModalContainer, ModalHeader, ModalTitle, ModalText, ModalButton } from './Modal';
import { useContext } from 'react'
import { challengesContext } from '../../context/ChallengesContext'

export const LevelUpModal = () => {
  const { level, closeModal } = useContext(challengesContext)
  return (
    <Modal>
      <ModalContainer>
        <ModalHeader>{level}</ModalHeader>
        <ModalTitle>Parabéns</ModalTitle>
        <ModalText>Você subiu de nível!</ModalText>

        <ModalButton type="button" onClick={closeModal}>
          <img src="/icons/close.svg" alt="fechar modal" />
        </ModalButton>
      </ModalContainer>
    </Modal>
  )
}
