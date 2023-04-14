import styled from 'styled-components';
import { fontSize, color, fontWeight, borderColor } from 'styled-system';
import Box from './Box';
import { TypographyProps } from './types';

const Label = styled(Box)<TypographyProps>`
  ${fontSize}
  ${fontWeight}
  ${color}
  ${borderColor}
`;

export default Label;
