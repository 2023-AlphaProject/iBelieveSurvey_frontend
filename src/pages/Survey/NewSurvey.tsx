import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSnackBar, useInput, useModal } from 'hooks';
import { COLORS } from 'constants/COLOR';
import { Input, Button, TextArea } from 'components/common';
import {
  StepProgress,
  CategoryPicker,
  ThumbnailBtn,
  Agreement,
  DatePicker,
} from 'components/Survey';
import dayjs, { Dayjs } from 'dayjs';

const TempSubmitButton = styled(Button)`
  background-color: transparent;
  color: #000;
  border: 3px solid ${COLORS.primary};
`;

const NewSurvey = () => {
  const [info, setInfo] = useState('');
  const [category, setCategory] = useState('');
  const [testValue, onChangeTestValue] = useInput('', 50);
  const [agreement, setAgreement] = useState(true);
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs().add(7, 'day'));

  const { handleSnackBar } = useSnackBar();
  const { openModal, closeModal } = useModal();

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
    callback: closeModal,
  };

  return (
    <>
      <StepProgress />
      <CategoryPicker category={category} setCategory={setCategory} />
      <Input
        limit={50}
        value={testValue}
        onChange={onChangeTestValue}
        type="text"
        placeholder="테스트를 작성해 보세요."
      />
      <TextArea value={info} setValue={setInfo} limit={1000} placeholder="소개글을 입력해주세요" />
      <ThumbnailBtn />
      <Agreement value={agreement} setValue={setAgreement} />
      <DatePicker value={endDate} setValue={setEndDate} />
      <br />
      <Button onClick={() => openModal(modalData)}>모달열기</Button>
      <TempSubmitButton
        type="button"
        style={{ backgroundColor: 'transparent', color: '#000' }}
        onClick={handleSnackBar({
          variant: 'success',
          message: '임시저장 완료되었습니다.',
        })}
      >
        임시저장 성공
      </TempSubmitButton>
      <Button
        type="button"
        onClick={handleSnackBar({
          variant: 'error',
          message: '임시저장에 실패했습니다.',
        })}
      >
        임시저장 실패
      </Button>
      <Link to="/survey/new/form">
        <Button>다음단계</Button>
      </Link>
    </>
  );
};

export default NewSurvey;
