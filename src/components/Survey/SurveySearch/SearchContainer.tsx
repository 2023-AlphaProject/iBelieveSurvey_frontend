import { Flex } from 'components/Box';
import styled from 'styled-components';
import { COLORS } from 'constants/COLOR';

const Container = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
  height: 12rem;
  border: 3px solid ${COLORS.secondary};
  border-radius: 25px;
`;

const InnerContainer = styled(Flex)`
  width: 100%;
  border-bottom: 2px solid ${COLORS.secondary};
  :nth-child(4) {
    border: none;
  }
`;

const SearchContainer = () => {
  return (
    <Container>
      <InnerContainer>ads</InnerContainer>
      <InnerContainer>ads</InnerContainer>
      <InnerContainer>ads</InnerContainer>
      <InnerContainer>ads</InnerContainer>
    </Container>
  );
};

export default SearchContainer;
