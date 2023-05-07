import { useState } from 'react';
import { Flex, Box } from 'components/Box';
import { COLORS } from 'constants/COLOR';
import styled from 'styled-components';

const Btn = styled.button`
  font-family: 'Pr-Bold';
  color: ${(props) => (props.isClicked ? 'black' : '#888888')};
  cursor: pointer;
`;

const Tab = () => {
  const labels = ['요약', '질문', '개별보기'];
  const [isClicked, setClick] = useState([true, false, false]);

  const handleClickDate = (id) => {
    setClick(
      isClicked.map((data, idx) => {
        let newData = data;
        if (data === true) {
          newData = false;
        }
        if (idx === id) {
          newData = !newData;
        }

        return newData;
      }),
    );
  };

  const insertBtn = () => {
    const newArr = [];
    for (let i = 0; i < 3; i += 1) {
      newArr.push(
        <Btn
          key={i}
          isClicked={isClicked[i]}
          onClick={() => {
            handleClickDate(i);
          }}
        >
          {labels[i]}
        </Btn>,
      );
    }
    return newArr;
  };

  return (
    <>
      <Flex justifyContent="space-around">{insertBtn()}</Flex>
      <Box background={COLORS.primary} width="100%" height="3px" mt={3} />
    </>
  );
};
export default Tab;
