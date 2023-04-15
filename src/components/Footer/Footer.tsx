import styled from 'styled-components';
import Flex from 'components/Box/Flex';

const FooterBox = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: 0 -7px 5px -2px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
`;

const Footer = () => {
  return <FooterBox>Footer</FooterBox>;
};

export default Footer;
