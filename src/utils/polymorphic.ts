import { ComponentProps, ElementType, ReactElement } from 'react';

export type AsProps<E extends ElementType = ElementType> = {
  as?: E;
};

export type MergeProps<E extends ElementType> = AsProps<E> & Omit<ComponentProps<E>, keyof AsProps>;

export type PolymorphicComponentProps<E extends ElementType, P> = P & MergeProps<E>;

export type PolymorphicComponent<P, D extends ElementType = 'button'> = <E extends ElementType = D>(
  props: PolymorphicComponentProps<E, P>,
) => ReactElement | null;
