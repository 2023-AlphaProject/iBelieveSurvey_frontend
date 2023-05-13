import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useWindowSize } from 'hooks/useWindowSize';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { COLORS } from 'constants/COLOR';
import { DeskTopNavbar, MobileNavbar } from 'components/Navbar';
import { AppBarContainer } from 'components/Navbar/NavbarStyles';

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
