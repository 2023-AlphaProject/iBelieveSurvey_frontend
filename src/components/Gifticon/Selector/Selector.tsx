import { useState } from 'react';
import { Flex, Label } from 'components/Box';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { COLORS } from 'constants/COLOR';
import styled from 'styled-components';

const Container = styled.div`
  width: 28rem;
  height: 8.5rem;
  padding: 1.25rem;
  border: solid ${COLORS.secondary};
  border-radius: 2.2rem;
`;

const Selector = () => {
  const [cnt, setCnt] = useState(1);
  return (
    <Container>
      <Label fontFamily="Pr-Bold" fontSize="1.1rem">
        마음을 전하는 선물 아메리카노(T)
      </Label>
      <Flex background="#FFC2AE" pt={2} pb={3} borderRadius="2rem" mt={4} position="relative">
        <RemoveIcon
          sx={{
            color: 'white',
            cursor: 'pointer',
            fontSize: '1.8rem',
            position: 'absolute',
            top: 9,
            left: 9,
          }}
          onClick={() => {
            if (cnt > 0) {
              setCnt(cnt - 1);
            } else {
              setCnt(0);
            }
          }}
        />
        <Label fontFamily="Pr-Bold" mt={2} ml="12rem">
          {cnt}
        </Label>
        <AddIcon
          sx={{
            color: 'white',
            cursor: 'pointer',
            fontSize: '1.8rem',
            position: 'absolute',
            top: 9,
            right: 9,
          }}
          onClick={() => {
            setCnt(cnt + 1);
          }}
        />
      </Flex>
    </Container>
  );
};

export default Selector;
