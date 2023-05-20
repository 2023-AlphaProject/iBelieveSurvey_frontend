import { Banner } from 'components/SurveyDetail';
import { useBanner } from 'hooks/useBanner';

const SurveyDetail = () => {
  const { bannerDataState, openBanner, closeBanner } = useBanner();

  const modalData = {
    title: '기프티콘 결과를 확인하세요',
    content: 'Check',
    callback: closeBanner,
  };
  return (
    <>
      <div>asd</div>
      <div>asd</div>
      SurveyDetail
      <button type="button" onClick={() => openBanner(modalData)}>
        모달열기
      </button>
    </>
  );
};

export default SurveyDetail;
