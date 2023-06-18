import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from 'states/stateUser';
import { useSnackBar } from 'hooks';
import { useNavigate } from 'react-router-dom';
import userToken from 'utils/userToken';
import { useWindowSize } from 'hooks/useWindowSize';
import { DeskTopNavbar, MobileNavbar } from 'components/Navbar';
import { AppBarContainer } from 'components/Navbar/NavbarStyles';
import { kakaoLogin } from 'utils/kakaoLogin';
import Container from '@mui/material/Container';

const Navbar = () => {
  const { handleSnackBar } = useSnackBar();
  const user = userToken();
  const navigate = useNavigate();
  const { KakaoLogin } = kakaoLogin();
  const isUser = Boolean(user?.user);
  const setUserState = useSetRecoilState(userState);

  const useLogOut = () => {
    sessionStorage.removeItem('userToken');
    setUserState({
      isUser: false,
      birthyear: '',
      email: '',
      gender: '',
      hidden_realName: '',
      realName: '',
      kakaoId: '',
      phoneNumber: '',
    });
    navigate('/');
    handleSnackBar({
      variant: 'success',
      message: '로그아웃 되었습니다.',
    })();
  };

  /*
  const navigate = useNavigate();
  const location = useLocation();
  const { handleSnackBar } = useSnackBar();
  const userInfo = useRecoilValue(userState);
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
          <DeskTopNavbar isUser={isUser} useLogOut={() => useLogOut()} KakaoLogin={KakaoLogin} />
        ) : (
          <MobileNavbar
            anchorElNav={anchorElNav}
            handleOpenNavMenu={(e) => handleOpenNavMenu(e)}
            handleCloseNavMenu={() => handleCloseNavMenu()}
            isUser={isUser}
            useLogOut={() => useLogOut()}
            KakaoLogin={KakaoLogin}
          />
        )}
      </Container>
    </AppBarContainer>
  );
};

export default Navbar;
