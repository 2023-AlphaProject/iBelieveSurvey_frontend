import { Box, Flex } from 'components/Box';
import {
  GiftsBasket,
  Payment,
  PaymentCaution,
  // RecommendedGifts,
  StepProgress,
} from 'components/Survey';
import styled from 'styled-components';
// import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const PaymentWrapper = styled(Flex)`
  flex-direction: row;
  margin-bottom: 10rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 4rem;
  }
`;

const BasketWrapper = styled(Flex)`
  width: 70%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const NewSurveyPayment = () => {
  // const { state } = useLocation();
  const [gifts] = useState([]);

  return (
    <>
      <StepProgress />
      <PaymentWrapper gap="1.5rem">
        <BasketWrapper flexDirection="column" gap="4rem" width="70%">
          <GiftsBasket gifts={gifts} />
          {/* <RecommendedGifts /> */}
          <Box height="3rem" />
          <PaymentCaution />
        </BasketWrapper>
        <Payment />
      </PaymentWrapper>
    </>
  );
};

export default NewSurveyPayment;
