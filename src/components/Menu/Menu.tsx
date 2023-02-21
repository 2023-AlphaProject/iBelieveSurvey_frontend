import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Flex from 'components/Box/Flex';

const MenuBox = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
`;

const TestBtn = styled.button`
  color: white;
  background: lightgray;
  font-size: 20px;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 600;
`;

const Menu = () => {
  return (
    <MenuBox>
      <Link to="/">
        <TestBtn>홈버튼</TestBtn>
      </Link>
      <Link to="/test">
        <TestBtn>테스트</TestBtn>
      </Link>
    </MenuBox>
  );
};

export default Menu;
