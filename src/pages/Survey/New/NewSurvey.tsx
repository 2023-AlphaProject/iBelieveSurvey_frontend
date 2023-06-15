import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSnackBar, useInput } from 'hooks';
import { Input, Button, TextArea, Tag } from 'components/common';
import {
  StepProgress,
  CategoryPicker,
  ThumbnailBtn,
  Agreement,
  DatePicker,
} from 'components/Survey';
import dayjs, { Dayjs } from 'dayjs';
import { Box, Flex, Label } from 'components/Box';
import { useAddSurvey } from 'hooks/queries/surveys';
import { imageType } from 'types';

const NewSurvey = () => {
  const TITLE_LIMIT = 50;
  const [title, onChangeTitle] = useInput('', TITLE_LIMIT);
  const [info, setInfo] = useState('');
  const [category, setCategory] = useState('');
  const [agreement, setAgreement] = useState(true);
  const [thumbnail, setThumbnail] = useState({ file: '', url: '' });
  const [endDate, setEndDate] = useState<Dayjs>(dayjs().add(7, 'day'));

  const { mutate: addSurvey } = useAddSurvey();

  const { handleSnackBar } = useSnackBar();
  // const { openModal, closeModal } = useModal();

  // const modalData = {
  //   title: 'modal title',
  //   content: (
  //     <ul>
  //       <li>modal content</li>
  //       <li>modal content</li>
  //       <li>modal content</li>
  //       <li>modal content</li>
  //     </ul>
  //   ),
  //   callback: closeModal,
  // };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('title', title);
    // formData.append('') 여기 내용
    // formData.append('category', category);
    // formData.append('end_at', endDate.toString());
    formData.append('is_survey_hidden', JSON.stringify(!agreement));
    formData.append('thumbnail', thumbnail.file);
    console.log(...formData.values());
    addSurvey(formData);
  };

  return (
    <Flex flexDirection="column" justifyContent="center" p="1rem 0 5rem 0" m="0 1rem">
      <StepProgress />
      <CategoryPicker category={category} setCategory={setCategory} />
      <Box m="4rem 0">
        <Tag scale="md" variant="secondary" mb="0.5rem">
          설문 종료일
        </Tag>
        <DatePicker value={endDate} setValue={setEndDate} />
      </Box>
      <Box mb="4rem">
        <Tag scale="md" variant="secondary" mb="1rem">
          제목
        </Tag>
        <Input
          limit={TITLE_LIMIT}
          value={title}
          onChange={onChangeTitle}
          type="text"
          placeholder="제목 입력"
        />
      </Box>
      <Box mb="4rem">
        <Flex alignItems="baseline" mb="1rem">
          <Tag scale="md" variant="secondary" mr="1rem">
            소개
          </Tag>
          <Label color="gray">자세한 소개글은 더 높은 참여율을 이끌어냅니다.</Label>
        </Flex>
        <TextArea
          value={info}
          setValue={setInfo}
          limit={1000}
          placeholder="소개글을 입력해주세요."
        />
      </Box>
      <Box mb="4rem">
        <Flex alignItems="baseline" mb="1rem">
          <Tag scale="md" variant="secondary" mr="1rem">
            썸네일
          </Tag>
          <Label color="gray">매력적인 썸네일은 더 높은 참여율을 이끌어냅니다.</Label>
        </Flex>
        <ThumbnailBtn image={thumbnail} setImage={setThumbnail} />
      </Box>
      <Flex flexDirection="column" alignItems="center" justifyContent="center" mb="6rem">
        <Agreement value={agreement} setValue={setAgreement} />
      </Flex>
      <Flex justifyContent="flex-end" gap="1rem">
        <Button
          variant="basic"
          onClick={handleSubmit}
          // onClick={handleSnackBar({
          //   variant: 'success',
          //   message: '임시저장 완료',
          // })}
        >
          임시저장
        </Button>
        <Link to="/survey/new/form">
          <Button>다음단계</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default NewSurvey;
