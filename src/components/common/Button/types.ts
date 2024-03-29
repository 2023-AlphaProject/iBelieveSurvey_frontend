import { ElementType } from 'react';
import { LayoutProps, SpaceProps } from 'styled-system';
import { PolymorphicComponentProps } from 'utils/polymorphic';

export const scales = {
  MD: 'md',
  SM: 'sm',
  XS: 'xs',
} as const;

export const variants = {
  PRIMARY: 'primary',
  PRIMARY_BASIC: 'basic',
  SECONDARY: 'secondary',
  SECONDARY_BASIC: 'secondaryBasic',
  TEXT: 'text',
} as const;

export type Scale = (typeof scales)[keyof typeof scales];
export type Variant = (typeof variants)[keyof typeof variants];

export interface BaseButtonProps extends LayoutProps, SpaceProps {
  isLoading?: boolean;
  scale?: Scale;
  variant?: Variant;
  disabled?: boolean;
}

export type ButtonProps<P extends ElementType = 'button'> = PolymorphicComponentProps<
  P,
  BaseButtonProps
>;
