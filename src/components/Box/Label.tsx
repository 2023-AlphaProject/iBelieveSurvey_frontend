import styled from 'styled-components';
import { typography } from 'styled-system';
import Box from './Box';
import { LabelProps } from './types';

const Label = styled(Box)<LabelProps>`
  ${typography}
`;

export default Label;
