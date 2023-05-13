import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from 'constants/COLOR';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  IDeskTopNavbar,
} from 'components/Navbar/NavbarStyles';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const MobileNavbar = ({ anchorElNav, handleOpenNavMenu, handleCloseNavMenu }: IDeskTopNavbar) => {
  return (
    <Toolbar disableGutters>
      {/* Mobile SearchBar */}
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        <Search sx={{ width: '80%' }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </Search>
      </Box>

      {/* Mobile Logo */}
      <Link to="/">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/logo-black.svg`}
          alt="IBELEVESURVEY Logo"
          style={{ width: '5rem' }}
        />
      </Link>

      {/* Mobile Hamburger Components */}
      <Box sx={{ flexGrow: 0, display: 'flex', color: '#000' }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: 'block',
          }}
        >
          <Link to="/">
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">설문 게시판</Typography>
            </MenuItem>
          </Link>
          <Link to="/test">
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">마이페이지</Typography>
            </MenuItem>
          </Link>
          <Link to="/">
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">123</Typography>
            </MenuItem>
          </Link>
        </Menu>
      </Box>
    </Toolbar>
  );
};

export default MobileNavbar;
