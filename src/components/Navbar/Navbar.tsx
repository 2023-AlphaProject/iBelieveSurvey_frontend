import { KeyboardEvent, SetStateAction, useState } from 'react';
import { kakaoLogin } from 'utils/kakaoLogin';
import { useWindowSize } from 'hooks/useWindowSize';
import { DeskTopNavbar, MobileNavbar } from 'components/Navbar';
import { AppBarContainer } from 'components/Navbar/NavbarStyles';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';

const Navbar = () => {
  const windowSize = useWindowSize();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [searchTitle, setSearchTitle] = useState('');
  const { KakaoLogin } = kakaoLogin();
  const navigate = useNavigate();

  const enterKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode === 13) {
      navigate(`/survey/search/${searchTitle}`);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.target.value);
  };

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
            kakaoLogin={KakaoLogin}
            handleSearchChange={handleSearchChange}
            enterKey={enterKey}
          />
        ) : (
          <MobileNavbar
            anchorElNav={anchorElNav}
            handleOpenNavMenu={(e) => handleOpenNavMenu(e)}
            handleCloseNavMenu={() => handleCloseNavMenu()}
            kakaoLogin={KakaoLogin}
            handleSearchChange={handleSearchChange}
            enterKey={enterKey}
          />
        )}
      </Container>
    </AppBarContainer>
  );
};

export default Navbar;
