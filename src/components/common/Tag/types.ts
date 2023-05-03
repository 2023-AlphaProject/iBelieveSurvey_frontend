import { ElementType } from 'react';
import { SpaceProps, LayoutProps } from 'styled-system';
import { PolymorphicComponentProps } from 'utils/polymorphic';

export const scales = {
  MD: 'md',
  SM: 'sm',
} as const;

export const variants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  GRAY: 'gray',
} as const;

export type Scale = (typeof scales)[keyof typeof scales];
export type Variant = (typeof variants)[keyof typeof variants];

export interface BaseTagProps extends LayoutProps, SpaceProps {
  scale?: Scale;
  variant?: Variant;
}

export type TagProps<P extends ElementType = 'div'> = PolymorphicComponentProps<P, BaseTagProps>;
