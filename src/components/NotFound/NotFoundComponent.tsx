import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Flex } from 'components/Box';
import { Button } from 'components/common';
import { COLORS } from 'constants/COLOR';

const ErrorContainer = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

const ErrorImg = styled.img`
  margin-top: 3vh;
  width: 380px;
  height: 30%;
`;

const ErrorMsg = styled.div`
  width: 100%;
  margin: 3rem 0 1rem 0;
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  color: #808080;
`;

const ToHomeButton = styled(Button)`
  font-size: 23px;
  font-weight: 700;
  background-color: ${COLORS.secondary};
  border-radius: 15px;
`;

const NotFoundComponent = () => {
  return (
    <ErrorContainer>
      <ErrorImg
        src={`${process.env.PUBLIC_URL}/assets/images/Error-404.png`}
        alt="404 Not Found Error Imgae"
      />
      <ErrorMsg>페이지를 찾을 수 없습니다.</ErrorMsg>
      <Link to="/">
        <ToHomeButton>홈으로가기</ToHomeButton>
      </Link>
    </ErrorContainer>
  );
};

export default NotFoundComponent;
