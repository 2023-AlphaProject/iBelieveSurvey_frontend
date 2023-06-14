import { Flex } from 'components/Box';
import {
  GIftsBasket,
  Payment,
  PaymentCaution,
  RecommendedGifts,
  StepProgress,
} from 'components/Survey';
import styled from 'styled-components';
// import { useLocation } from 'react-router-dom';

const PaymentWrapper = styled(Flex)`
  flex-direction: row;
  margin-bottom: 10rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const BasketWrapper = styled(Flex)`
  width: 70%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const NewSurveyPayment = () => {
  // const location = useLocation();

  return (
    <>
      <StepProgress />
      <PaymentWrapper gap="1.5rem">
        <BasketWrapper flexDirection="column" gap="4rem" width="70%">
          <GIftsBasket />
          <RecommendedGifts />
          <PaymentCaution />
        </BasketWrapper>
        <Payment />
      </PaymentWrapper>
    </>
  );
};

export default NewSurveyPayment;
