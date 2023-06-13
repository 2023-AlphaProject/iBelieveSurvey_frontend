import { Flex, Box, Label } from 'components/Box';
import { GiftInfo } from 'components/Gifticon';
import { COLORS } from 'constants/COLOR';
import Pagination from '@mui/material/Pagination';
import dummyGifts from '../GiftInfo/dummyGifts';

const GiftList = () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Box width="89%" height="2.25rem" background={COLORS.primaryVariant} p={2}>
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
      <Box width="89%" height="2px" background={COLORS.primary} />
      <Flex flexDirection="column" width="89%" mb="2rem">
        <GiftInfo gift={dummyGifts} />
        <GiftInfo gift={dummyGifts} />
        <GiftInfo gift={dummyGifts} />
        <GiftInfo gift={dummyGifts} />
      </Flex>
      <Pagination />
    </Flex>
  );
};

export default GiftList;
