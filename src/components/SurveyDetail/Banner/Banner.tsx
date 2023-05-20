import { useModal } from 'hooks/useModal';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: absolute;
  top: 5rem;
  width: 100%;
  height: 2rem;
  background-color: red;
`;

const Banner = () => {
  const { modalDataState, closeModal } = useModal();

  return modalDataState.isOpen ? (
    <ModalContainer>asd</ModalContainer>
  ) : (
    <ModalContainer>assd</ModalContainer>
  );
};

export default Banner;
