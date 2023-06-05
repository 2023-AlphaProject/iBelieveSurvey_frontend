import { ElementType } from 'react';
import styled from 'styled-components';
import { variant, space, layout } from 'styled-system';
import { BaseTagProps, TagProps, variants, scales } from './types';
import { scaleVariants, styleVariants } from './theme';

const StyledTag = styled.div<BaseTagProps>`
  color: white;
  border: 0;
  justify-content: center;
  border-radius: 1rem;
  font-family: 'Pr-SemiBold';
  align-items: center;
  display: inline-flex;
  white-space: nowrap;

  ${variant({ prop: 'scale', variants: scaleVariants })}
  ${variant({ variants: styleVariants })}
  ${layout}
  ${space}
`;

const Tag = <E extends ElementType = 'div'>({
  children,
  variant,
  scale,
  ...rest
}: TagProps<E>): JSX.Element => {
  return (
    <StyledTag variant={variant} scale={scale} {...rest}>
      {children}
    </StyledTag>
  );
};

Tag.defaultProps = {
  scale: scales.SM,
  variant: variants.GRAY,
};

export default Tag;
