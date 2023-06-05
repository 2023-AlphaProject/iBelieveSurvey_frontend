import Switch from '@mui/material/Switch';
import styled from 'styled-components';
import { COLORS } from 'constants/COLOR';

const ToggleLib = styled(Switch)`
  color: ${COLORS.secondary};
`;

const Toggle = () => {
  return <ToggleLib color="warning" />;
};
export default Toggle;
