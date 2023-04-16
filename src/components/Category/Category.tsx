import { useState } from 'react';
import styled from 'styled-components';
import { Flex } from 'components/Box';
import dummyData from './dummyCategorys';

interface ButtonProps {
  isClicked?: boolean;
}

const CategoryBtn = styled.button<ButtonProps>`
  padding: 0.4rem;
  font-size: 0.9rem;
  font-weight: 600;
  border: 2px solid;
  border-color: #5184b1;
  border-radius: 1rem;
  cursor: pointer;
  color: ${(props) => (props.isClicked ? 'white' : 'black')};
  background: ${(props) => (props.isClicked ? '#91b2ce' : 'transparent')};
`;

const Category = () => {
  const [categorys, setCategory] = useState(dummyData);

  const handleClick = (id: number) => {
    setCategory(
      categorys.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            isClicked: !data.isClicked,
          };
        }
        if (data.isClicked === true) {
          return {
            ...data,
            isClicked: false,
          };
        }
        return data;
      }),
    );
  };
  return (
    <Flex gridGap={2} flexWrap="wrap">
      {categorys.map((category) => (
        <CategoryBtn
          key={category.id}
          isClicked={category.isClicked}
          onClick={() => {
            handleClick(category.id);
          }}
        >
          {category.content}
        </CategoryBtn>
      ))}
    </Flex>
  );
};
export default Category;
