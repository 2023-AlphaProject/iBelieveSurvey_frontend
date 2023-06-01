import styled from 'styled-components';
import { Flex, Label } from 'components/Box';
import { COLORS } from 'constants/COLOR';
import { useState } from 'react';
import { LabelProps } from 'components/Box/types';

interface Props {
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
  const { setLabel } = props;
  const [categorys] = useState(['카테고리별 보기', '브랜드별 보기']);
  const [selected, setSelected] = useState(categorys[0]);

  const handleChange = (category: string) => {
    setLabel(category);
    setSelected(category);
  };

  return (
    <Flex flexDirection="column" width="15rem">
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/gifticon_category.svg`}
        alt="GIFTICON"
        style={{ width: '13rem', height: '2.5rem', borderRadius: '1.2rem' }}
      />
      <Flex flexDirection="column" gap="1.5rem" pl="3.5rem" mt={3}>
        {categorys.map((category) => (
          <Category
            width="auto"
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
