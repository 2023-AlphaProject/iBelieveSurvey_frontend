import { useState } from 'react';
import { useWindowSize } from 'hooks/useWindowSize';
import { DeskTopNavbar, MobileNavbar } from 'components/Navbar';
import { AppBarContainer } from 'components/Navbar/NavbarStyles';
import Container from '@mui/material/Container';

const Navbar = () => {
  const windowSize = useWindowSize();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBarContainer>
      <Container style={{ width: '100%', maxWidth: '1200px' }}>
        {windowSize.width !== undefined && windowSize.width > 900 ? (
          <DeskTopNavbar
            anchorElNav={anchorElNav}
            handleCloseNavMenu={() => handleCloseNavMenu()}
          />
        ) : (
          <MobileNavbar
            anchorElNav={anchorElNav}
            handleOpenNavMenu={(e) => handleOpenNavMenu(e)}
            handleCloseNavMenu={() => handleCloseNavMenu()}
          />
        )}
      </Container>
    </AppBarContainer>
  );
};

export default Navbar;
