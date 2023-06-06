import { Dispatch, SetStateAction } from 'react';
import { Flex, Label, Box } from 'components/Box';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as DP } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { COLORS } from 'constants/COLOR';

interface Props {
  value: Dayjs | null;
  setValue: Dispatch<SetStateAction<Dayjs | null>>;
}

const DatePicker = ({ value, setValue }: Props) => {
  const minDate = dayjs().add(7, 'day');
  return (
    <Flex alignContent="center">
      <Flex alignItems="center" mt="8px">
        <Box width="8px" height="8px" background={COLORS.gray} borderRadius={10} />
        <Label ml="10px" color={COLORS.gray} fontFamily="Pr-SemiBold">
          설문 종료 날짜 설정
        </Label>
      </Flex>
      <Flex ml="2rem">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DP
              value={value}
              onChange={(newValue) => setValue(newValue)}
              minDate={minDate}
              slotProps={{ textField: { size: 'small' } }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Flex>
    </Flex>
  );
};

export default DatePicker;
