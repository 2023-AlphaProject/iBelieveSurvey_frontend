import styled from 'styled-components';
import Flex from 'components/Box/Flex';
import { Button } from 'components/common';

const Container = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const BlurImg = styled.img`
  filter: blur(10px);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100%;
  height: 100%;
`;

const BlurBotton = styled(Button)`
  position: absolute;
  height: 4rem;
`;

const Blur = () => {
  return (
    <Container>
      <BlurImg src={`${process.env.PUBLIC_URL}/assets/images/blur.png`} alt="Blur Image" />
      <BlurBotton onClick={() => console.log('login page')}>로그인 후 결과 보기</BlurBotton>
    </Container>
  );
};

export default Blur;
