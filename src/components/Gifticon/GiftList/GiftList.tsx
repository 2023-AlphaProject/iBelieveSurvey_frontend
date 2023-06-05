import { Flex, Box, Label } from 'components/Box';
import { GiftInfo } from 'components/Gifticon';
import { COLORS } from 'constants/COLOR';
import dummyGifts from '../GiftInfo/dummyGifts';

const GiftList = () => {
  return (
    <Flex flexDirection="column">
      <Box width="90%" height="2.25rem" background={COLORS.primaryVariant} p={2}>
        <Flex justifyContent="space-around">
          <Label fontSize="0.95rem" fontFamily="Pr-Bold" mr="3rem">
            전달한 기프티콘 목록
          </Label>
          <Label fontSize="0.95rem" fontFamily="Pr-Bold">
            전달자
          </Label>
          <Label fontSize="0.95rem" fontFamily="Pr-Bold">
            수령자
          </Label>
        </Flex>
      </Box>
      <Box width="90%" height="2px" background={COLORS.primary} />
      <GiftInfo gift={dummyGifts} />
    </Flex>
  );
};

export default GiftList;
