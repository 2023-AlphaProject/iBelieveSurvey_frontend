import { useState } from 'react';
import styled from 'styled-components';
import { Flex } from 'components/Box';
import dummyData from './dummyCategories';

interface ButtonProps {
  isClicked?: boolean;
}

interface Props {
  color: string;
}

const CategoryBtn = styled.button<ButtonProps>`
  padding: 0.4rem;
  font-size: 0.9rem;
  font-weight: 600;
  border: 2px solid;
  border-color: ${(props) => props.color};
  border-radius: 1rem;
  cursor: pointer;
  color: black;
  background: ${(props) => (props.isClicked ? '#d0d0d0' : 'transparent')};
`;

const Category = (props: Props) => {
  const { color } = props;
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
    <Flex gap="0.5rem" flexWrap="wrap">
      {categories.map((category) => (
        <CategoryBtn
          key={category.id}
          isClicked={category.isClicked}
          onClick={() => {
            handleClick(category.id);
          }}
          color={color}
        >
          {category.content}
        </CategoryBtn>
      ))}
    </Flex>
  );
};
export default Category;
