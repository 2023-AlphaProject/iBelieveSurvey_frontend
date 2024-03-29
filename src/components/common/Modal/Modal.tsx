import { useModal } from 'hooks/useModal';
import styled from 'styled-components';

const ModalDimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  max-height: 600px;
  min-width: 300px;
  min-height: 100px;
  background-color: #ffffff;
  border: 1px solid #cbcbcb;
  border-radius: 10px;
`;
const ModalTitle = styled.div`
  padding: 1rem;
  font-weight: bold;
  font-size: large;
  border-bottom: 1px solid #cbcbcb;
`;
const ModalContents = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #cbcbcb;
`;
const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`;
const ModalButton = styled.button`
  background: none;
  border: none;
  width: 100%;
  height: 52px;
  font-weight: bold;
  :hover {
    opacity: 50%;
    transition: 0.5s;
  }
`;

const ModalButtonWithBorder = styled(ModalButton)`
  border-right: 1px solid #cbcbcb;
`;

const Modal = () => {
  const { modalDataState, closeModal } = useModal();

  return modalDataState.isOpen ? (
    <ModalDimmer>
      <ModalBody>
        <ModalTitle>{modalDataState.title}</ModalTitle>
        <ModalContents>{modalDataState.content}</ModalContents>
        <ModalFooter>
          <ModalButtonWithBorder onClick={closeModal}>Cancel</ModalButtonWithBorder>
          <ModalButton onClick={modalDataState.callback}>Ok</ModalButton>
        </ModalFooter>
      </ModalBody>
    </ModalDimmer>
  ) : (
    <div />
  );
};

export default Modal;
