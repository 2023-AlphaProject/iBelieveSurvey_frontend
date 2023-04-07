import styled from 'styled-components';
import { fontSize, color, space, layout, fontWeight, background, border } from 'styled-system';
import { TypographyProps } from './types';

const Label = styled.div<TypographyProps>`
  ${fontSize}
  ${fontWeight}
  ${color}
  ${space}
  ${layout}
  ${background}
  ${border}
`;

export default Label;
