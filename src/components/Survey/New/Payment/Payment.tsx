import { Flex, Label } from 'components/Box';
import { Button } from 'components/common';
import { COLORS } from 'constants/COLOR';
import { useCallback } from 'react';
import styled from 'styled-components';
import { giftType } from 'types';

const PaymentWrapper = styled(Flex)`
  height: 100%;
  width: 30%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

interface Props {
  gifts: {
    template?: number;
    gift?: giftType;
    quantity?: number;
    price?: number;
  }[];
}

const Payment = ({ gifts }: Props) => {
  const getPaymentInfo = useCallback(() => {
    const info = { amount: 0, quantity: 0 };
    gifts.forEach(({ quantity = 0, price = 0 }) => {
      info.amount += quantity * price;
      info.quantity += quantity;
    });

    return info;
  }, [gifts]);

  return (
    <PaymentWrapper
      border={`2px solid ${COLORS.primary}`}
      borderRadius="2rem"
      p="1.5rem 2rem"
      flexDirection="column"
    >
      <Label
        borderBottom={`1px solid ${COLORS.primary}`}
        pb="10px"
        width="100%"
        fontFamily="Pr-SemiBold"
        color={COLORS.primary}
      >
        상품 결제
      </Label>
      <Flex justifyContent="space-between" p="20px 0 10px 0">
        <span>총 상품 금액</span>
        <span>
          {getPaymentInfo()
            .amount.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </span>
      </Flex>
      <Flex
        justifyContent="space-between"
        p="10px 0 20px 0"
        borderBottom={`0.8px solid ${COLORS.primaryVariant}`}
      >
        <span>총 상품 수량</span>
        <span>{getPaymentInfo().quantity}개</span>
      </Flex>
      <Flex p="1rem 0 2rem 0" justifyContent="space-between">
        <Label fontFamily="Pr-SemiBold" color={COLORS.primary}>
          결제 예정 금액
        </Label>
        <Label fontFamily="Pr-SemiBold">
          {getPaymentInfo()
            .amount.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </Label>
      </Flex>
      <Flex gap="10px">
        <Button
          width="50%"
          style={{
            backgroundColor: COLORS.gray,
            borderRadius: '1rem',

            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          이전으로
        </Button>
        <Button width="50%" style={{ borderRadius: '1rem', paddingLeft: 0, paddingRight: 0 }}>
          결제하기
        </Button>
      </Flex>
    </PaymentWrapper>
  );
};

export default Payment;
