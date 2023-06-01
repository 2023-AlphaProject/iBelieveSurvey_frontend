import { Flex, Label } from 'components/Box';

const BrandLogo = () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/starbucks_logo.svg`}
        alt="GIFTICON"
        style={{ width: '5.25rem', height: '5.25rem', cursor: 'pointer' }}
      />
      <Label fontFamily="Pr-Regular">스타벅스</Label>
    </Flex>
  );
};

export default BrandLogo;
