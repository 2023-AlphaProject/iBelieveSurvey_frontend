import { useModal } from 'hooks/useModal';
import { useState } from 'react';
import Alert from 'components/common/Alert/Alert';
import { SnackbarProvider, useSnackbar } from 'notistack';

const Test = () => {
  const { openModal } = useModal();
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

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
    callback: () => console.log('modal!'),
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
      <button type="button" onClick={() => enqueueSnackbar('That was easy!')}>
        Show snackbar
      </button>
    </>
  );
};

export default Test;
