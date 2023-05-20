import { useLocation } from 'react-router-dom';
import { useBanner } from 'hooks/useBanner';
import { COLORS } from 'constants/COLOR';
import styled from 'styled-components';
import { useEffect } from 'react';

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 2.5rem;
  padding: 0 2rem 0 2rem;
  background-color: ${COLORS.secondary};
`;

const BannerInnerContainer = styled.div`
  display: flex;
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

const BannerButton = styled.button`
  text-align: center;
  width: 5rem;
  height: 1.4rem;
  border: 2.5px solid #fff;
  border-radius: 5px;
  color: #fff;
  :hover {
    background-color: ${COLORS.secondaryVariant};
  }
`;

const Banner = () => {
  const { bannerDataState, openBanner, closeBanner } = useBanner();
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, []);

  return (
    <BannerContainer>
      <BannerInnerContainer>
        <BannerTitle>{bannerDataState.title}</BannerTitle>
        <BannerButton type="button" onClick={bannerDataState.callback}>
          {bannerDataState.content}
        </BannerButton>
      </BannerInnerContainer>
    </BannerContainer>
  );
};

export default Banner;
