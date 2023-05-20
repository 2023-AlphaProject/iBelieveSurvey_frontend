import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { bannerState } from 'states/stateBanner';

const SurveyDetail = () => {
  const [bannerDataState, setBannerDataState] = useRecoilState(bannerState);
  const [temp, setTemp] = useState(false);

  if (!temp) {
    setBannerDataState({
      title: 'asd',
      content: 'asd',
    });
    setTemp(true);
  }

  return <>SurveyDetail</>;
};

export default SurveyDetail;
