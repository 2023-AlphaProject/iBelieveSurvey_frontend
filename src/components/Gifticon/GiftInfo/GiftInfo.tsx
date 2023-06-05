import { Flex, Label } from 'components/Box';
import giftType from './types';

interface Props {
  gift: giftType;
}

const GiftInfo = (props: Props) => {
  const { gift } = props;
  return (
    <Flex justifyContent="space-between" m="1rem" width="76.6%">
      <Flex>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/starbucks.jpg`}
          alt="IBELEVESURVEY Logo"
          style={{ width: '6.75rem', borderRadius: '1rem' }}
        />
        <Flex flexDirection="column" gap="1.5rem" p="1rem">
          <Label fontFamily="Pr-SemiBold" fontSize="0.9rem">
            {gift.title}
          </Label>
          <Flex gap="1rem">
            <Label fontFamily="Pr-Regular" fontSize="0.9rem">
              {gift.price}원
            </Label>
            <Label fontFamily="Pr-Regular" fontSize="0.9rem">
              {gift.cnt}개
            </Label>
          </Flex>
        </Flex>
      </Flex>
      <Label fontFamily="Pr-Regular" fontSize="0.9rem" mt="4%">
        {gift.giver}
      </Label>
      <Flex flexDirection="column" gap="0.5rem" ml="4%" mt="1%">
        {gift.taker.map((data: string) => (
          <Label fontFamily="Pr-Regular" fontSize="0.9rem" key={data}>
            {data}
          </Label>
        ))}
      </Flex>
    </Flex>
  );
};

export default GiftInfo;
