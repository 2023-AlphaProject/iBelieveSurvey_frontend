import { Flex } from 'components/Box';
import styled from 'styled-components';
import { StageSpinner } from 'react-spinners-kit';

const Container = styled(Flex)`
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 90%;
`;

const LoadingContainer = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center;
`;

const LoadingImg = styled.img`
  width: 20rem;
`;

const LoadingTextContainer = styled(Flex)`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-right: 2rem;
`;

const LoadingComponent = () => {
  return (
    <Container>
      <LoadingContainer>
        <LoadingImg
          src={`${process.env.PUBLIC_URL}/assets/images/loading.png`}
          alt="IBELEVESURVEY Logo"
        />
        <LoadingTextContainer>
          <LoadingText>Loading</LoadingText>
          <StageSpinner size={100} color="#000" />
        </LoadingTextContainer>
      </LoadingContainer>
    </Container>
  );
};
export default LoadingComponent;
