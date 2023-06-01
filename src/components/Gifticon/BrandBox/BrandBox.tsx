import { Flex } from 'components/Box';
import { BrandLogo } from 'components/Gifticon';
import Pagination from '@mui/material/Pagination';

const BrandBox = () => {
  return (
    <Flex flexDirection="column" alignItems="center" width="95%">
      <Flex flexWrap="wrap" gap="2.5rem" mb={5} p={2}>
        <BrandLogo />
        <BrandLogo />
        <BrandLogo />
        <BrandLogo />
        <BrandLogo />
        <BrandLogo />
        <BrandLogo />
        <BrandLogo />
        <BrandLogo />
        <BrandLogo />
        <BrandLogo />
        <BrandLogo />
        <BrandLogo />
        <BrandLogo />
      </Flex>
      <Pagination count={5} />
    </Flex>
  );
};

export default BrandBox;
