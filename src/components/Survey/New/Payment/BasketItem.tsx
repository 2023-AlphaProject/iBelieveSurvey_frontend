import { Checkbox, IconButton } from '@mui/material';
import { Flex, Label } from 'components/Box';
import { COLORS } from 'constants/COLOR';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styled from 'styled-components';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ClearIcon from '@mui/icons-material/Clear';

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

const BasketItem = () => {
  return (
    <ItemWraaper
      borderBottom={`1px solid ${COLORS.primary}`}
      p="1.5rem 0"
      alignItems="center"
      gap="20px"
      justifyContent="space-between"
    >
      <Flex alignItems="center" gap="20px">
        <Checkbox
          color="secondary"
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
          sx={{ marginBottom: 'auto' }}
        />
        <GiftImg
          loading="lazy"
          src="https://st.kakaocdn.net/product/gift/product/20220107172532_8a6336605bf447bd8632fe6d72b8d7d9.jpg"
        />
        <Flex flexDirection="column" gap="1rem" mb="30px" width="100%">
          <Label color={COLORS.primary} fontFamily="Pr-SemiBold">
            스타벅스
          </Label>
          <Label style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            마음을 전하는 선물 아메리카노
          </Label>
        </Flex>
      </Flex>
      <CounterWraaper alignItems="center" gap="10px">
        <Label fontFamily="Pr-SemiBold" mr="1.5rem">
          4,700원
        </Label>
        <IconButton aria-label="minus" color="primary">
          <RemoveCircleIcon />
        </IconButton>
        <Label fontFamily="Pr-SemiBold">1개</Label>
        <IconButton aria-label="plus" color="primary">
          <AddCircleIcon />
        </IconButton>
        <IconButton aira-label="delete" size="small">
          <ClearIcon />
        </IconButton>
      </CounterWraaper>
    </ItemWraaper>
  );
};

export default BasketItem;
