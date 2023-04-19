import { useModal } from 'hooks/useModal';
import { useCallback } from 'react';
import { useSnackbar } from 'notistack';
import { Sidebar } from 'components/common';

type IAlert = {
  message: string;
  variant: 'success' | 'error' | 'warning' | 'info';
};

const Test = () => {
  const { openModal } = useModal();
  const { enqueueSnackbar } = useSnackbar();

  const handleAlert = useCallback(
    (button: IAlert) => () => {
      enqueueSnackbar(button.message, { variant: button.variant });
    },
    [enqueueSnackbar],
  );

  const modalData = {
    title: 'modal title',
    content: (
      <ul>
        <li>modal content</li>
        <li>modal content</li>
        <li>modal content</li>
        <li>modal content</li>
      </ul>
    ),
  };
  return (
    <>
      <div>
        <button onClick={() => openModal(modalData)} type="button">
          모달열기
        </button>
        <br />
        통신·방송의 시설기준과 신문의 기능을 보장하기 위하여 필요한 사항은 법률로 정한다. 국가는
        과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의 발전에 노력하여야 한다. 국정의
        중요한 사항에 관한 대통령의 자문에 응하기 위하여 국가원로로 구성되는 국가원로자문회의를 둘
        수 있다. 모든 국민은 자기의 행위가 아닌 친족의 행위로 인하여 불이익한 처우를 받지 아니한다.
      </div>

      {/*
      variant: success, error, warning, info*
      */}
      <div>
        <button
          type="button"
          onClick={handleAlert({
            variant: 'success',
            message: 'Success snackbar 최대 stack 3개로 설정했슴다.',
          })}
        >
          Show Success snackbar
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={handleAlert({
            variant: 'error',
            message: 'Error snackbar',
          })}
        >
          Show Error snackbar
        </button>
      </div>
      <br />

      <Sidebar
        title="카테고리 선택"
        categorys={[
          '인구통계',
          '라이프스타일',
          '기술',
          '건강과 웰빙',
          '정치 및 사회문제',
          '소비자 행동',
          '직장과 경력',
          '교육',
          '여행 및 관광',
          '엔터테인먼트',
        ]}
      />
      <br />
    </>
  );
};

export default Test;
