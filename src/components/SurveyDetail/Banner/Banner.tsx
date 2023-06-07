import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { Flex } from 'components/Box';
import { Button } from 'components/common';
import { COLORS } from 'constants/COLOR';
import { bannerState } from 'states/stateBanner';

const BannerContainer = styled(Flex)`
  justify-content: center;
  width: 100%;
  height: 2.5rem;
  padding: 0 2rem 0 2rem;
  background-color: ${COLORS.secondary};
`;

const BannerInnerContainer = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1152px;
`;

const BannerTitle = styled.h1`
  color: #fff;
  font-size: 16px;
  font-weight: 900;
`;

const BannerButton = styled(Button)`
  height: 1.4rem;
  border: 2.5px solid #fff;
  border-radius: 5px;
  background-color: transparent;
`;

const Banner = () => {
  const [bannerDataState] = useRecoilState(bannerState);
  const location = useLocation();

  const URL = location.pathname;
  const URLRegex = /^\/survey\/[0-9]+$/;
  const isBanner = URLRegex.test(URL);

  return isBanner ? (
    <BannerContainer>
      <BannerInnerContainer>
        <BannerTitle>{bannerDataState.title}</BannerTitle>
        <BannerButton type="button" onClick={bannerDataState.callback}>
          {bannerDataState.content}
        </BannerButton>
      </BannerInnerContainer>
    </BannerContainer>
  ) : (
    <div />
  );
};

export default Banner;
