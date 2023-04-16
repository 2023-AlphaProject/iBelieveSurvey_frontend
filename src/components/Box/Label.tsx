import styled from 'styled-components';
import { fontSize, color, fontWeight } from 'styled-system';
import Box from './Box';
import { TypographyProps } from './types';

const Label = styled(Box)<TypographyProps>`
  ${fontSize}
  ${fontWeight}
  ${color}
`;

export default Label;
