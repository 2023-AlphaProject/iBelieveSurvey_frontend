import { scales, variants } from './types';

export const scaleVariants = {
  [scales.MD]: {
    height: '28px',
    padding: '0 8px',
    fontSize: '14px',
  },
  [scales.SM]: {
    height: '24px',
    padding: '0 6px',
    fontSize: '12px',
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: 'primary',
  },

  [variants.SECONDARY]: {
    backgroundColor: 'secondary',
  },
  [variants.GRAY]: {
    backgroundColor: 'gray',
  },
};
