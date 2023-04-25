import styled, { DefaultTheme } from 'styled-components';
import { space, layout, variant } from 'styled-system';
import { COLORS } from 'constants/COLOR';
import { BaseButtonProps } from './types';
import { scaleVariants, styleVariants } from './theme';

interface ThemedButtonProps extends BaseButtonProps {
  theme: DefaultTheme;
}

interface TransientButtonProps extends ThemedButtonProps {
  isLoading?: boolean;
}

const getDisabledStyles = ({ isLoading }: TransientButtonProps) => {
  if (isLoading === true) {
    return `
      &:disabled,
      &.button--disabled {
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled,
    &.button--disabled {
      background-color: ${COLORS.gray};
      border: 1px solid;
      border-color: ${COLORS.gray};
      cursor: not-allowed;
    }
  `;
};

const getOpacity = ({ isLoading = false }: TransientButtonProps) => {
  return isLoading ? '.5' : '1';
};

const StyledButton = styled.button<BaseButtonProps>`
  align-items: center;
  border: 0;
  border-radius: 2rem;
  cursor: pointer;
  display: inline-flex;
  font-family: 'Pr-SemiBold';
  font-size: 1rem;
  justify-content: center;
  line-height: 1;
  opacity: ${getOpacity};
  transition: background-color 0.2s, opactiy 0.2s;

  &:hover:not(:disabled):not(.button--disabled):not(.button--disabled):not(:active) {
    opacity: 0.65;
  }

  :active:not(:disabled):not(.button--disabled):not(.button--disabled) {
    opacity: 0.85;
  }

  ${getDisabledStyles}
  ${variant({ prop: 'scale', variants: scaleVariants })}
  ${variant({ variants: styleVariants })}
  ${layout}
  ${space}
`;

export default StyledButton;
