/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex, Label } from 'components/Box';
import { Checkbox } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { COLORS } from 'constants/COLOR';
import { AddItem, BasketItem } from 'components/Survey';

interface Props {
  gifts: any;
}

const GiftsBasket = ({ gifts }: Props) => {
  return (
    <Flex flexDirection="column">
      <Flex background={COLORS.primaryVariant} alignItems="center">
        <Checkbox
          sx={{
            color: 'white',
            '&.Mui-checked': {
              color: 'white',
            },
          }}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
        />
        <Label color="white">전체선택</Label>
      </Flex>
      <Box mt="6px" borderBottom={`2px solid ${COLORS.primary}`} />
      {gifts.map((gift: any) => (
        <BasketItem
          key={`gift_${gift?.template}`}
          gift={gift?.template}
          quantity={gift?.quantity}
        />
      ))}
      <AddItem only={!gifts.length} />
    </Flex>
  );
};

export default GiftsBasket;
