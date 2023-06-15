import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { bannerState } from 'states/stateBanner';
import { Flex, Box, Label } from 'components/Box';
import { Thumbnail } from 'components/SurveyDetail';
import { Tag, Button } from 'components/common';
import { useDate } from 'hooks/useDate';
import { COLORS } from 'constants/COLOR';

const SurveyDatail = () => {
  const navigate = useNavigate();
  const [, setBannerDataState] = useRecoilState(bannerState);
  const [temp, setTemp] = useState(false);

  if (!temp) {
    setBannerDataState({
      title: '로그인 후 기프티콘 결과를 확인하세요!',
      content: '로그인',
      callback: () => navigate('/login'),
    });
    setTemp(true);
  }

  return (
    <Flex alignItems="center" flexDirection="column" gap="2rem">
      <Flex gap="2rem">
        <Thumbnail />
        <Flex flexDirection="column" width="32.5rem" gap="0.75rem">
          <Label fontSize="0.8rem" fontFamily="Pr-Regular">
            {useDate(new Date())} ~ {useDate(new Date())}
          </Label>
          <Flex gap="0.5rem" ml={1}>
            <Tag variant="secondary">진행중</Tag>
            <Tag>인구통계</Tag>
          </Flex>
          <Label fontFamily="Pr-Bold" ml={1}>
            알파프로젝트에 대해 알아보기 위한 설문조사(스타벅스 당첨 기회!)
          </Label>
          <Flex height="15rem" flexDirection="column" gap="2rem">
            <Label fontFamily="Pr-Regular" fontSize="0.9rem" mt={3} ml={1}>
              안녕하세요. 알파 프로젝트에 대해 알아보기 위한 설문조사입니다. 알파 프로젝트란 ~~~
              이런 것이고요. 저는 ~~ 이런저런 것을 알아보기 위해 설문을 올렸습니다. 이 설문에
              참여하면 추첨을 통해 스타벅스 기프티콘을 드립니다. 많은 참여 부탁드립니다. 안녕하세요.
              알파 프로젝트에 대해 알아보기 위한 설문조사입니다. 알파 프로젝트란 ~~~ 이런 것이고요.
              저는 ~~ 이런저런 것을 알아보기 위해 설문을 올렸습니다. 이 설문에 참여하면 추첨을 통해
              스타벅스 기프티콘을 드립니다. 많은 참여 부탁드립니다.{' '}
            </Label>
            <Label fontFamily="Pr-Bold" fontSize="0.9rem" color={COLORS.secondary} ml={1}>
              설문 상세보기
            </Label>
          </Flex>

          <Flex gap="1rem">
            <Button scale="xs" width="9rem">
              기프티콘 결제 및 조회
            </Button>
            <Flex flexDirection="column" gap="0.1rem" mt="0.4rem">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/human.svg`}
                alt="IBELEVESURVEY Logo"
                style={{ width: '1.1rem' }}
              />
              <Label fontSize="0.6rem">435</Label>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Box width="100%;" height="0.12rem" background={COLORS.primary} />
      <Flex flexDirection="column" gap="1rem" pl="10rem" pr="8rem">
        <Tag variant="secondary" width="2.25rem">
          소개
        </Tag>
        <Label fontFamily="Pr-SemiBold" fontSize="0.9rem" lineHeight="1.3">
          안녕하세요. 알파 프로젝트에 대해 알아보기 위한 설문조사입니다. 알파 프로젝트란 ~~~ 이런
          것이고요. 저는 ~~ 이런저런 것을 알아보기 위해 설문을 올렸습니다. 이 설문에 참여하면 추첨을
          통해 스타벅스 기프티콘을 드립니다. 많은 참여 부탁드립니다. 안녕하세요. 알파 프로젝트에
          대해 알아보기 위한 설문조사입니다. 알파 프로젝트란 ~~~ 이런 것이고요. 저는 ~~ 이런저런
          것을 알아보기 위해 설문을 올렸습니다. 이 설문에 참여하면 추첨을 통해 스타벅스 기프티콘을
          드립니다. 많은 참여 부탁드립니다. 안녕하세요. 알파 프로젝트에 대해 알아보기 위한
          설문조사입니다. 알파 프로젝트란 ~~~ 이런 것이고요. 저는 ~~ 이런저런 것을 알아보기 위해
          설문을 올렸습니다. 이 설문에 참여하면 추첨을 통해 스타벅스 기프티콘을 드립니다. 많은 참여
          부탁드립니다. 이 설문에 참여하면 추첨을 통해 스타벅스 기프티콘을 드립니다. 많은 참여
          부탁드립니다. 안녕하세요. 알파 프로젝트에 대해 알아보기 위한 설문조사입니다. 알파
          프로젝트란 ~~~ 이런 것이고요. 저는 ~~ 이런저런 것을 알아보기 위해 설문을 올렸습니다. 이
          설문에 참여하면 추첨을 통해 스타벅스 기프티콘을 드립니다. 많은 참여 부탁드립니다.{' '}
        </Label>
        <Button scale="xs" width="6rem" variant="secondary" margin="0 auto;">
          설문 종료하기
        </Button>
      </Flex>
    </Flex>
  );
};
export default SurveyDatail;
