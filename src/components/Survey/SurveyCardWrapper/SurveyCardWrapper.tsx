import { ReactNode } from 'react';
import { Flex } from 'components/Box';
import Pagination from '@mui/material/Pagination';

interface WrapperProps {
  children: ReactNode;
}

const SurveyCardWrapper = ({ children }: WrapperProps) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Flex flexWrap="wrap" gap="0.1rem">
        {children}
      </Flex>
      <Pagination count={5} />
    </Flex>
  );
};
export default SurveyCardWrapper;
