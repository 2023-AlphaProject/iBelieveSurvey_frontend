import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from 'components/Navbar';
import { Box, Flex } from 'components/Box';
import { Footer } from 'components/Footer';

const MainContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Content = styled(Box)`
  max-width: 1250px;
  margin: 20px;
  width: 100vw;
  margin-top: 20px;
  padding: 2rem;
  flex: 1;
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
