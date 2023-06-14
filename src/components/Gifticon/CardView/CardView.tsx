import { Flex, Label } from 'components/Box';
import { COLORS } from 'constants/COLOR';
import cardType from './types';

interface Props {
  card: cardType;
}

const Card = (props: Props) => {
  const { card } = props;
  return (
    <Flex flexDirection="column" mr={3}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/${card.thumbnail}`}
        alt="GIFTICON"
        style={{ width: '12.5rem', height: '12.75rem', borderRadius: '1.2rem', cursor: 'pointer' }}
      />
      <Flex p={2} flexDirection="column" gap="0.5rem">
        <Label fontFamily="Pr-Bold" fontSize="0.85rem" color={COLORS.primary}>
          {card.brand}
        </Label>
        <Label fontFamily="Pr-Regular" fontSize="0.85rem">
          {card.gift}
        </Label>

        <Label fontFamily="Pr-Bold" mt={1}>
          {card.price}원
        </Label>
      </Flex>
    </Flex>
  );
};

export default Card;
