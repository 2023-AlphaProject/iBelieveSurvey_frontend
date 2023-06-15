import { Flex, Label } from 'components/Box';

const PaymentCaution = () => {
  return (
    <Flex flexDirection="column" p="1.5rem" mb="2rem" background="#d9d9d9" borderRadius="20px">
      <Label fontFamily="Pr-SemiBold">기프티콘 선물하기 주의사항</Label>
      <ol style={{ padding: '1rem 0 0 1rem', lineHeight: '1.5rem' }}>
        <li>1. dddd</li>
        <li>2. ddd</li>
        <li>3. dd</li>
        <li>4. d</li>
      </ol>
    </Flex>
  );
};

export default PaymentCaution;
