import { Modal } from './Modal'
import { useContext } from 'react';
import { challengesContext } from '../../context/ChallengesContext';

export const LevelUpModal = () => {
  const { level, closeModal } = useContext(challengesContext)
  return (
    <Modal>
      <Modal.Container>
        <Modal.Header>{level}</Modal.Header>
        <Modal.Title>Parabéns</Modal.Title>
        <Modal.Text>Você subiu de nível!</Modal.Text>

        <Modal.Button type="button" onClick={closeModal}>
          <img src="/icons/close.svg" alt="fechar modal" />
        </Modal.Button>
      </Modal.Container>
    </Modal>
  )
}
