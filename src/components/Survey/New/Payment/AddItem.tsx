/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from 'react-router-dom';
import { Flex, Label } from 'components/Box';
import { COLORS } from 'constants/COLOR';
import styled from 'styled-components';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const ItemWraaper = styled(Flex)`
  width: 100%;

  &:hover {
    background-color: rgba(152, 178, 201, 0.1);
  }
`;

interface Props {
  only: boolean;
}

const AddItem = ({ only }: Props) => {
  const { state } = useLocation();
  return (
    <Link to="/survey/new/gift" state={{ id: state.id }}>
      <ItemWraaper
        borderBottom={`1px solid ${COLORS.primary}`}
        p={only ? '4rem 0' : '1.5rem 0'}
        cursor="pointer"
      >
        <Flex width="100%" gap="10px" alignItems="center" justifyContent="center">
          <AddCircleOutlineIcon color="primary" />
          <Label fontSize="1.2rem" color={COLORS.primary} fontFamily="Pr-SemiBold">
            기프티콘을 선택하세요.
          </Label>
        </Flex>
      </ItemWraaper>
    </Link>
  );
};

export default AddItem;
