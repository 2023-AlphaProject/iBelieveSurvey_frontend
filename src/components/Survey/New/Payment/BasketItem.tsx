import { Checkbox, IconButton } from '@mui/material';
import { Flex, Label } from 'components/Box';
import { COLORS } from 'constants/COLOR';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styled from 'styled-components';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ClearIcon from '@mui/icons-material/Clear';
import { giftType } from 'types';
import { useDeleteCarts } from 'hooks/queries/surveys';

const GiftImg = styled.img`
  object-fit: cover;
  border-radius: 1rem;
  width: 9rem;
  height: 9rem;
`;

const ItemWraaper = styled(Flex)`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CounterWraaper = styled(Flex)`
  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
    margin: -1rem 0 -0.5rem 0;
  }
`;

const InfoWrapper = styled(Flex)`
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: -20px;
  }
`;

interface Props {
  surveyId: number;
  uuid: number;
  gift: giftType;
  quantity: number;
}

const BasketItem = ({ surveyId, uuid, gift, quantity }: Props) => {
  const { mutate: deleteCarts } = useDeleteCarts(surveyId, uuid);

  const removeItem = () => {
    deleteCarts();
  };

  return (
    <ItemWraaper
      borderBottom={`1px solid ${COLORS.primary}`}
      p="1.5rem 0"
      alignItems="center"
      gap="20px"
      justifyContent="space-between"
    >
      <Flex alignItems="center" gap="10px">
        <Checkbox
          color="secondary"
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
          sx={{ marginBottom: 'auto' }}
        />
        <InfoWrapper>
          <GiftImg loading="lazy" src={gift.product_image_url} />
          <ItemWraaper flexDirection="column" gap="1rem" mb="30px" width="100%">
            <Label color={COLORS.primary} fontFamily="Pr-SemiBold">
              {gift.brand_name}
            </Label>
            <Label style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {gift.product_name}
            </Label>
          </ItemWraaper>
        </InfoWrapper>
      </Flex>
      <CounterWraaper alignItems="center" gap="10px">
        <Label fontFamily="Pr-SemiBold" mr="1.5rem">
          {(quantity * gift.product_price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </Label>
        <IconButton aria-label="minus" color="primary">
          <RemoveCircleIcon />
        </IconButton>
        <Label fontFamily="Pr-SemiBold">{quantity}개</Label>
        <IconButton aria-label="plus" color="primary">
          <AddCircleIcon />
        </IconButton>
        <IconButton onClick={removeItem} aira-label="delete" size="small">
          <ClearIcon />
        </IconButton>
      </CounterWraaper>
    </ItemWraaper>
  );
};

export default BasketItem;
