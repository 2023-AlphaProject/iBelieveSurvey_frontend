import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from 'components/Menu';
import { Box, Flex } from 'components/Box';
import { Footer } from 'components/Footer';

const MainContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
`;

const Content = styled(Box)`
  max-width: 1200px;
  margin: 20px;
`;

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <MainContainer>
      <Navbar />
      <Content>{children || <Outlet />}</Content>
      <Footer />
    </MainContainer>
  );
};

export default Layout;
