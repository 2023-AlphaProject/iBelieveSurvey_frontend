import { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { Flex } from 'components/Box';
import Pagination from '@mui/material/Pagination';

interface WrapperProps extends PropsWithChildren {
  currentPage: number;
  totalPages: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const SurveyCardWrapper = ({ children, currentPage, totalPages, setPage }: WrapperProps) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Flex flexWrap="wrap" gap="0.1rem">
        {children}
      </Flex>
      <Pagination page={currentPage} count={totalPages} onChange={(e, p) => setPage(p)} />
    </Flex>
  );
};
export default SurveyCardWrapper;
