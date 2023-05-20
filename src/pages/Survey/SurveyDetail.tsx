import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { bannerState } from 'states/stateBanner';

const SurveyDetail = () => {
  const navigate = useNavigate();
  const [bannerDataState, setBannerDataState] = useRecoilState(bannerState);
  const [temp, setTemp] = useState(false);

  if (!temp) {
    setBannerDataState({
      title: '로그인 후 기프티콘 결과를 확인하세요!',
      content: '로그인',
      callback: () => navigate('/login'),
    });
    setTemp(true);
  }

  return <>SurveyDetail</>;
};

export default SurveyDetail;
