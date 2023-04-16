import { HTMLAttributes } from 'react';
import {
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  FontSizeProps,
  FontWeightProps,
  GridGapProps,
} from 'styled-system';

export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    HTMLAttributes<HTMLDivElement> {}

export interface FlexProps extends BoxProps, FlexboxProps, GridGapProps {}

export interface TypographyProps
  extends FontSizeProps,
    FontWeightProps,
    BoxProps,
    HTMLAttributes<HTMLDivElement> {}
