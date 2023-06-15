import { Flex, Box, Label } from 'components/Box';
import { useDate } from 'hooks/useDate';
import { COLORS } from 'constants/COLOR';
import PersonIcon from '@mui/icons-material/Person';
import { surveyType } from 'types/surveyType';
import styled from 'styled-components';

interface Props {
  survey: surveyType;
}

const IconContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
`;

const Card = (props: Props) => {
  const { survey } = props;

  if (survey.is_survey_hidden) {
    return <div />;
  }

  return (
    <Flex flexDirection="column" pb={3} cursor="pointer">
      <Box width="14rem" height="10rem" borderRadius="1.25rem" background={COLORS.primaryVariant} />
      <Flex p={2} flexDirection="column" gap="8px">
        <Flex>
          <Label
            height="1.2rem"
            fontSize="0.15rem"
            color="white"
            borderRadius={10}
            background="#ffa869"
            p={1}
            mt={1}
            fontFamily="Pr-Bold"
          >
            {survey.is_ongoing ? '진행중' : '종료'}
          </Label>
          <Label fontSize="0.7rem" color="#888888" fontFamily="Pr-Regular" m={2} mr={3}>
            {useDate(new Date(survey.started_at))} ~ {useDate(new Date(survey.end_at))}
          </Label>
          <IconContainer>
            <PersonIcon sx={{ color: COLORS.secondary, fontSize: 20 }} />
            <Label fontSize="0.1px" color="#888888">
              {survey.participants}
            </Label>
          </IconContainer>
        </Flex>

        <Label width="13.6rem" fontSize="0.9rem" fontFamily="Pr-Bold">
          {survey.title}
        </Label>
        <Flex>
          <Label
            fontSize="0.1rem"
            fontFamily="Pr-Regular"
            color="white"
            borderRadius={10}
            background="#949494"
            p={1}
            mr={1}
          >
            {survey.category}
          </Label>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Card;
