import { useContext } from 'react'
import { challengesContext } from '../../context/ChallengesContext'
import {
  Modal,
  ModalButton,
  ModalContainer,
  ModalLink,
  ModalHeader,
  ModalMain,
  ModalText,
  ModalTitle,
} from './Modal'

export const LevelUpModal = () => {
  const { level, closeModal } = useContext(challengesContext)
  return (
    <Modal>
      <ModalContainer>
        <ModalMain>
          <ModalHeader>{level}</ModalHeader>
          <ModalTitle>Parabéns</ModalTitle>
          <ModalText>Você alcançou um novo nível!</ModalText>

          <ModalButton type="button" onClick={closeModal}>
            <img src="/icons/close.svg" alt="fechar modal" />
          </ModalButton>
        </ModalMain>

        <ModalLink
          href={`https://twitter.com/intent/tweet?via=risaddex&hashtags=moveitclone&related=risaddex&text=Subi para o nível ${level} no`}
          target="_blank"
          rel="noreferrer"
        >
          Compartilhar no twitter{' '}
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="#2aa9e0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.1668 2.49996C18.3688 3.06285 17.4853 3.49338 16.5502 3.77496C16.0483 3.19788 15.3813 2.78887 14.6394 2.60323C13.8974 2.41759 13.1164 2.46429 12.4019 2.737C11.6874 3.00972 11.0739 3.49529 10.6443 4.12805C10.2148 4.76082 9.98991 5.51024 10.0002 6.27496V7.10829C8.53569 7.14626 7.08456 6.82147 5.776 6.16283C4.46745 5.50419 3.34209 4.53215 2.50016 3.33329C2.50016 3.33329 -0.83317 10.8333 6.66683 14.1666C4.9506 15.3316 2.90613 15.9157 0.833496 15.8333C8.3335 20 17.5002 15.8333 17.5002 6.24996C17.4994 6.01783 17.4771 5.78629 17.4335 5.55829C18.284 4.71953 18.8842 3.66055 19.1668 2.49996Z"
                fill="#2aa9e0"
              />
            </svg>
          </span>
        </ModalLink>
      </ModalContainer>
    </Modal>
  )
}

export const WarningModal = ({ onClose }) => {
  const handleClick = () => onClose()

  return (
    <Modal>
      <ModalContainer>
        <ModalMain>
          <ModalTitle>Atenção</ModalTitle>
          <ModalText>
            <br />
            Este App é um clone com finalidade única e exclusivamente didática.
            <br />
            Moveit possui todos os direitos reservados sobre seu logotipo e
            imagem.
          </ModalText>

          <ModalButton type="button" onClick={handleClick}>
            <img src="/icons/close.svg" alt="fechar modal" />
          </ModalButton>
        </ModalMain>
      </ModalContainer>
    </Modal>
  )
}
