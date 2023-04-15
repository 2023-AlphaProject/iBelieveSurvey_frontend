import * as React from 'react';
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

const Navbar = () => {
  const windowSize = useWindowSize();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '30px',
    border: '2px solid #E77853',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#E77853',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      color: '#000',
      [theme.breakpoints.up('sm')]: {
        width: '30ch',
        '&:focus': {
          borderRadius: '30px',
          border: '1px solid #E77853',
          width: '33ch',
        },
      },
    },
  }));

  return (
    <AppBar position="static" style={{ backgroundColor: '#fff', padding: '0 15px' }}>
      <Container maxWidth="xl">
        {windowSize.width !== undefined && windowSize.width > 900 ? (
          <Toolbar disableGutters>
            {/* PC Logo */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 5,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            {/* PC SearchBar */}
            <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
              </Search>
            </Box>
            {/* PC Components */}
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, gap: '15px' }}>
              <Link to="/">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: '#000', display: 'block', fontWeight: '700' }}
                >
                  설문 게시판
                </Button>
              </Link>
              <Link to="/test">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: '#000', display: 'block', fontWeight: '700' }}
                >
                  마이페이지
                </Button>
              </Link>
              <Link to="/">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: 'block',
                    width: '7rem',
                    textAlign: 'center',
                    color: '#fff',
                    backgroundColor: '#E77853',
                    my: 2,
                    fontWeight: '700',
                    borderRadius: '30px',
                    boxShadow: '-3px 5px 5px -3px rgba(0,0,0,0.74)',
                    '&:hover': {
                      backgroundColor: '#FF7854',
                    },
                  }}
                >
                  로그아웃
                </Button>
              </Link>
            </Box>
          </Toolbar>
        ) : (
          <Toolbar disableGutters>
            {/* Mobile SearchBar */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
              </Search>
            </Box>

            {/* Mobile Logo */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                ml: 4,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#000',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            {/* Mobile Hamburger Components */}
            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none', color: '#000' } }}>
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
                  display: { xs: 'block', md: 'none' },
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
        )}
      </Container>
    </AppBar>
  );
};

export default Navbar;
