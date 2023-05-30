import { Link } from 'react-router-dom';
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
import Button from '@mui/material/Button';

const DeskTopNavbar = ({ handleCloseNavMenu }: IDeskTopNavbar) => {
  return (
    <Toolbar disableGutters style={{ height: '4.3rem' }}>
      {/* PC Logo */}
      <Link to="/">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/logo-black.svg`}
          alt="IBELEVESURVEY Logo"
          style={{ width: '7rem', marginRight: '2rem' }}
        />
      </Link>
      {/* PC SearchBar */}
      <Box sx={{ flexGrow: 2, display: 'flex' }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </Search>
      </Box>
      {/* PC Components */}

      <Box sx={{ flexGrow: 0, display: 'flex', gap: '15px' }}>
        <Link to="/survey">
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: '#000', display: 'block', fontWeight: '700' }}
          >
            설문 게시판
          </Button>
        </Link>
        <Link to="/mypage">
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
              backgroundColor: `${COLORS.secondary}`,
              my: 2,
              fontWeight: '700',
              borderRadius: '30px',
              boxShadow: '-3px 5px 5px -3px rgba(0,0,0,0.74)',
              '&:hover': {
                backgroundColor: `${COLORS.secondaryVariant}`,
              },
            }}
          >
            로그인
          </Button>
        </Link>
      </Box>
    </Toolbar>
  );
};

export default DeskTopNavbar;
