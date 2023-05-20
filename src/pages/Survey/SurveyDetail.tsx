import { useBanner } from 'hooks/useBanner';

const SurveyDetail = () => {
  const { bannerDataState, setBannerDataState, openBanner, closeBanner } = useBanner();
  openBanner({ title: 'asd', content: 'asd' });

  return <>SurveyDetail</>;
};

export default SurveyDetail;
