import styled from 'styled-components';
import { Flex, Label } from 'components/Box';
import { COLORS } from 'constants/COLOR';
import { useState } from 'react';
import { LabelProps } from 'components/Box/types';

interface Props {
  title: string;
  categorys: string[];
  setLabel: React.Dispatch<React.SetStateAction<string>>;
}

interface CategoryProps extends LabelProps {
  selected?: boolean;
}

const Category = styled(Label)<CategoryProps>`
  cursor: pointer;
  color: ${(props) => props.selected && COLORS.secondary};
  &:hover {
    color: ${(props) => !props.selected && COLORS.gray};
  }
`;

const Sidebar = (props: Props) => {
  const { title, categorys, setLabel } = props;
  const [selected, setSelected] = useState(categorys[0]);

  const handleChange = (category: string) => {
    setLabel(category);
    setSelected(category);
  };

  return (
    <Flex flexDirection="column" width="15rem">
      <Label
        background={COLORS.secondary}
        p={10}
        borderRadius={30}
        textAlign="center"
        color="white"
        fontFamily="Pr-SemiBold"
        mb="1.5rem"
        fontSize={22}
      >
        {title}
      </Label>
      <Flex flexDirection="column" gap="1.5rem" pl="3.5rem">
        {categorys.map((category) => (
          <Category
            width="12rem"
            key={`sidebar_${category}`}
            fontFamily="Pr-SemiBold"
            fontSize={18}
            selected={selected === category}
            onClick={() => handleChange(category)}
          >
            {category}
          </Category>
        ))}
      </Flex>
    </Flex>
  );
};

export default Sidebar;
