import { HTMLAttributes } from 'react';
import {
  BackgroundProps,
  BorderProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  GridProps,
} from 'styled-system';

export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    GridProps,
    HTMLAttributes<HTMLDivElement> {}

export interface FlexProps extends BoxProps, FlexboxProps {}
