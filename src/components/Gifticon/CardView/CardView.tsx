import { Flex, Label } from 'components/Box';
import { COLORS } from 'constants/COLOR';
import { Link } from 'react-router-dom';
import { giftType } from 'types';

interface Props {
  gift: giftType;
}

const Card = (props: Props) => {
  const { gift } = props;
  return (
    <Link to={`/survey/new/gift/${gift.id}`}>
      <Flex flexDirection="column" mr={3}>
        <img
          src={gift.product_image_url}
          alt="GIFTICON"
          style={{
            width: '12.5rem',
            height: '12.75rem',
            borderRadius: '1.2rem',
            cursor: 'pointer',
          }}
        />
        <Flex p={2} flexDirection="column" gap="0.5rem">
          <Label fontFamily="Pr-Bold" fontSize="0.85rem" color={COLORS.primary}>
            {gift.brand_name}
          </Label>
          <Label fontFamily="Pr-Regular" fontSize="0.85rem">
            {gift.product_name}
          </Label>
          <Label fontFamily="Pr-Bold" mt={1}>
            {gift.product_price}원
          </Label>
        </Flex>
      </Flex>
    </Link>
  );
};

export default Card;
