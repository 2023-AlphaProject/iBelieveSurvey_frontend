import { Flex, Box, Label } from 'components/Box';
import { COLORS } from 'constants/COLOR';
import giftType from './types';

interface Props {
  gift: giftType;
}

const GiftInfo = (props: Props) => {
  const { gift } = props;
  return (
    <>
      <Flex m="1rem" width="85%" justifyContent="space-between" cursor="pointer">
        <Flex>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/starbucks.jpg`}
            alt="IBELEVESURVEY Logo"
            style={{ width: '6rem', borderRadius: '1.2rem' }}
          />
          <Flex flexDirection="column" gap="1.5rem" p="1rem" width="100%">
            <Label fontFamily="Pr-SemiBold" fontSize="0.85rem" width="11.4rem">
              {gift.title}
            </Label>
            <Flex gap="1rem">
              <Label fontFamily="Pr-Regular" fontSize="0.85rem">
                {gift.price}원
              </Label>
              <Label fontFamily="Pr-Regular" fontSize="0.85rem">
                {gift.cnt}개
              </Label>
            </Flex>
          </Flex>
        </Flex>

        <Label fontFamily="Pr-Regular" fontSize="0.9rem" mt="2.5rem">
          {gift.giver}
        </Label>
        <Flex flexDirection="column" gap="0.5rem" mt="1.4rem">
          {gift.taker.map((data: string) => (
            <Label fontFamily="Pr-Regular" fontSize="0.9rem" key={data}>
              {data}
            </Label>
          ))}
        </Flex>
      </Flex>

      <Box width="100%" height="0.1rem" background={COLORS.primaryVariant} />
    </>
  );
};

export default GiftInfo;
