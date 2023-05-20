import { Banner } from 'components/common';
import { useBanner } from 'hooks/useBanner';

const SurveyDetailBanner = () => {
  const { bannerDataState, openBanner, closeBanner } = useBanner();

  console.log(window.location.href);

  const modalData = {
    title: '기프티콘 결과를 확인하세요',
    content: 'Check',
    callback: closeBanner,
  };

  return (
    <button type="button" onClick={() => openBanner(modalData)}>
      배너열기
    </button>
  );
};

export default SurveyDetailBanner;
