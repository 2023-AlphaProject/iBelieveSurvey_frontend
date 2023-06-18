import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from 'states/stateUser';
import { useLocation, useNavigate } from 'react-router-dom';
import userToken from 'utils/userToken';
import { useSnackBar } from 'hooks';
import { useWindowSize } from 'hooks/useWindowSize';
import { DeskTopNavbar, MobileNavbar } from 'components/Navbar';
import { AppBarContainer } from 'components/Navbar/NavbarStyles';
import Container from '@mui/material/Container';

const Navbar = () => {
  const user = userToken();
  const isUser = Boolean(user?.user);

  /*
  const navigate = useNavigate();
  const { handleSnackBar } = useSnackBar();
  const userInfo = useRecoilValue(userState);
  

  
  const location = useLocation();

  const URL = location.pathname;
  const isNeedSignUp = URL === '/signup';

    if (
    !isNeedSignUp &&
    isUser &&
    (!userInfo.gender || !userInfo.birthYear || !userInfo.email || !userInfo.phoneNumber)
  ) {
    handleSnackBar({
      variant: 'error',
      message: '기입되지 않은 정보가 있습니다. 정보를 모두 기입해주세요',
    })();
    navigate('/signup');
  } */

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
          <DeskTopNavbar isUser={isUser} />
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
