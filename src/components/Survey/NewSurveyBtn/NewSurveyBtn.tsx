import { Flex, Box, Label } from 'components/Box';
import { COLORS } from 'constants/COLOR';

const NewSurveyBtn = () => {
  return (
    <Flex flexDirection="column" gap="0.75rem">
      <Box
        width="14.25rem"
        height="10rem"
        borderRadius="1.25rem"
        border="3px solid"
        borderColor={COLORS.primaryVariant}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/add-icon.svg`}
          alt="IBELEVESURVEY Logo"
          style={{ width: '3rem', margin: '3.5rem 5.4rem', cursor: 'pointer' }}
        />
      </Box>
      <Box width="14.25rem" height="5rem" borderRadius="1.25rem" background={COLORS.primaryVariant}>
        <Label color="white" fontFamily="Pr-Bold" mt={30} ml={66}>
          새 설문 작성하기
        </Label>
      </Box>
    </Flex>
  );
};

export default NewSurveyBtn;
