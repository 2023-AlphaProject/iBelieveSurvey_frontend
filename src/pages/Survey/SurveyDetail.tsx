import { useNavigate, useParams } from 'react-router-dom';
// import { useRecoilState } from 'recoil';
// import { bannerState } from 'states/stateBanner';
import { Flex, Box, Label } from 'components/Box';
import { Thumbnail } from 'components/SurveyDetail';
import { Tag, Button } from 'components/common';
import { COLORS } from 'constants/COLOR';
import styled from 'styled-components';
import { useSurveyQuery } from 'hooks/queries/survey';

const Content = styled(Label)`
  font-family: 'Pr-Regular';
  font-size: 0.9rem;
  margin: 1rem 0;
  @media screen and (max-width: 945px) {
    display: none;
  }
`;

const SurveyDatail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useSurveyQuery(Number(id));
  const startDay = data?.data.created_at.substr(0, 10);
  const endDay = data?.data.created_at.substr(0, 10);
  // console.log(data?.data);
  // const [, setBannerDataState] = useRecoilState(bannerState);
  // const [temp, setTemp] = useState(false);

  // if (!temp) {
  //   setBannerDataState({
  //     title: '로그인 후 기프티콘 결과를 확인하세요!',
  //     content: '로그인',
  //     callback: () => navigate('/login'),
  //   });
  //   setTemp(true);
  // }

  return (
    <Flex alignItems="center" flexDirection="column" gap="2rem">
      <Flex gap="2rem" flexWrap="wrap" justifyContent="center">
        <Thumbnail isEnd={data?.data.is_end} endAt={data?.data.end_at} img={data?.data.thumbnail} />
        <Flex flexDirection="column" width="29rem" gap="0.75rem" pl={3}>
          <Flex gap="0.5rem">
            {data?.data.is_end === true ? (
              <Tag variant="primary">설문종료</Tag>
            ) : (
              <Tag variant="secondary">진행중</Tag>
            )}

            <Tag>{data?.data.category_name}</Tag>
          </Flex>
          <Label fontFamily="Pr-Bold">{data?.data.title}</Label>
          <Label fontSize="0.8rem" fontFamily="Pr-Regular">
            {startDay} ~ {endDay}
          </Label>
          <Flex maxHeight="14.5rem" flexDirection="column" gap="2rem">
            <Content>{data?.data.outline}</Content>
          </Flex>

          <Flex gap="1rem">
            {data?.data.is_end === false ? (
              <Flex gap="0.6rem">
                <Button scale="xs" variant="secondary">
                  설문 결과 보기
                </Button>

                <Button scale="xs" onClick={() => navigate(`/survey/${data?.data.id}/gift-result`)}>
                  기프티콘 전달 과정 확인
                </Button>
              </Flex>
            ) : (
              <Button scale="xs">설문 응답 조회</Button>
            )}
            <Flex flexDirection="column" gap="0.1rem" mt="0.4rem" alignItems="center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/human.svg`}
                alt="IBELEVESURVEY Logo"
                style={{ width: '1.1rem' }}
              />
              <Label fontSize="0.6rem">{data?.data.participants}</Label>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Box width="100%;" height="0.12rem" background={COLORS.primary} />
      <Flex width="90%" flexDirection="column" gap="1rem">
        <Tag variant="secondary" width="2.25rem">
          소개
        </Tag>
        <Label fontFamily="Pr-SemiBold" fontSize="0.9rem" lineHeight="1.3">
          {data?.data.outline}
        </Label>
        {/* <Button scale="xs" variant="secondary" margin="0 auto;">
          설문 종료하기
        </Button> */}
      </Flex>
    </Flex>
  );
};
export default SurveyDatail;
