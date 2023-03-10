import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Menu } from 'components/Menu';
import { Box, Flex } from 'components/Box';

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
      <Menu />
      <Content>{children || <Outlet />}</Content>
    </MainContainer>
  );
};

export default Layout;
