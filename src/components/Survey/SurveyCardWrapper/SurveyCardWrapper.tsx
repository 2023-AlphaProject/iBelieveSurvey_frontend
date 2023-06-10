import { PropsWithChildren } from 'react';
import { Flex } from 'components/Box';
import Pagination from '@mui/material/Pagination';

interface WrapperProps extends PropsWithChildren {
  currentPage: number;
  totalPages: number;
}

const SurveyCardWrapper = ({ children, currentPage, totalPages }: WrapperProps) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Flex flexWrap="wrap" gap="0.1rem">
        {children}
      </Flex>
      <Pagination page={currentPage} count={totalPages} />
    </Flex>
  );
};
export default SurveyCardWrapper;
