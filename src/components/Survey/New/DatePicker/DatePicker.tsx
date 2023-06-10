import { Dispatch, SetStateAction } from 'react';
import { Flex } from 'components/Box';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as DP } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

interface Props {
  value: Dayjs | null;
  setValue: Dispatch<SetStateAction<Dayjs | null>>;
}

const DatePicker = ({ value, setValue }: Props) => {
  const minDate = dayjs().add(7, 'day');
  return (
    <Flex>
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
  );
};

export default DatePicker;
