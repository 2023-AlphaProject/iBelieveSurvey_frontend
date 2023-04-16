import { Flex } from 'components/Box';
import styled from 'styled-components';

const ErrorContainer = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

const ErrorImg = styled.img`
  margin-top: 10vh;
  width: 50%;
  height: 30%;
`;

const ErrorMsg = styled.div`
  width: 100%;
  margin-top: 3rem;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  color: #808080;
`;

const ToHomeButton = styled.button`
  width: 5rem;
  height: 2rem;
  background-color: red;
`;

const NotFound = () => {
  return (
    <ErrorContainer>
      <ErrorImg
        src={`${process.env.REACT_APP_BASE_URL}/assets/images/Error-404.png`}
        alt="404 Not Found Error Imgae"
      />
      <ErrorMsg>페이지를 찾을 수 없습니다.</ErrorMsg>
      <ToHomeButton>홈으로 가기</ToHomeButton>
    </ErrorContainer>
  );
};

export default NotFound;
