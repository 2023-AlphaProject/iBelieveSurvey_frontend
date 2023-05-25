import { Flex, Label } from 'components/Box';
import { COLORS } from 'constants/COLOR';
import cardType from './types';

interface Props {
  card: cardType;
}

const Card = (props: Props) => {
  const { card } = props;
  return (
    <Flex flexDirection="column">
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/${card.thumbnail}`}
        alt="GIFTICON"
        style={{ width: '14rem', height: '14.25rem', borderRadius: '1.2rem' }}
      />
      <Flex p={2} flexDirection="column" gap="0.5rem">
        <Label fontFamily="Pr-Bold" fontSize="0.9rem" color={COLORS.primary}>
          {card.brand}
        </Label>
        <Label fontFamily="Pr-Regular" fontSize="0.9rem">
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
