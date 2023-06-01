import { useState } from 'react';
import { Flex } from 'components/Box';
import { COLORS } from 'constants/COLOR';
import styled from 'styled-components';
import dummyData from './dummyCategories';

interface ButtonProps {
  isClicked?: boolean;
}

const CategoryBtn = styled.button<ButtonProps>`
  width: 7rem;
  padding: 0.4rem;
  font-family: 'Pr-Bold';
  border: 2px solid;
  border-color: ${(props) => (props.isClicked ? COLORS.secondary : 'transparent')};
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  color: black;
`;

const Category = () => {
  const [categories, setCategories] = useState(dummyData);

  const handleClick = (id: number) => {
    setCategories(
      categories.map((data) => {
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
    <Flex gap="1.2rem" flexWrap="wrap" borderColor={COLORS.secondary} border="3px" width="95%">
      {categories.map((category) => (
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
