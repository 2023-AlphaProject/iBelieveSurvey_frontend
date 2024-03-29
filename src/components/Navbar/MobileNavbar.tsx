import { Link } from 'react-router-dom';
import { KeyboardEvent } from 'react';
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

const MobileNavbar = ({
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
  isUser,
  useLogOut,
  KakaoLogin,
  handleSearchChange,
  enterKey,
}: IDeskTopNavbar) => {
  return (
    <Toolbar disableGutters style={{ height: '4.3rem' }}>
      {/* Mobile SearchBar */}
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        <Search sx={{ width: '80%' }} onKeyUp={(e) => enterKey(e)}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearchChange(e)}
          />
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
          <Link to="/survey">
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">설문 게시판</Typography>
            </MenuItem>
          </Link>
          {isUser ? (
            <div>
              <Link to="/mypage">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">마이페이지</Typography>
                </MenuItem>
              </Link>
              <Link to="/">
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    useLogOut();
                  }}
                >
                  <Typography textAlign="center">로그아웃</Typography>
                </MenuItem>
              </Link>
            </div>
          ) : (
            <Link to="/">
              <MenuItem
                onClick={() => {
                  KakaoLogin();
                  handleCloseNavMenu();
                }}
              >
                <Typography textAlign="center">로그인</Typography>
              </MenuItem>
            </Link>
          )}
        </Menu>
      </Box>
    </Toolbar>
  );
};

export default MobileNavbar;
