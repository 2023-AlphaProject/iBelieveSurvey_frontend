import { HTMLAttributes } from 'react';
import {
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    HTMLAttributes<HTMLDivElement> {}

export interface FlexProps extends BoxProps, FlexboxProps {
  gap?: string;
  cursor?: string;
}

export interface LabelProps extends TypographyProps, BoxProps {}
