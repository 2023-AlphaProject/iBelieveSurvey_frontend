import { useCallback } from 'react';
import { useSnackbar } from 'notistack';

interface ISnackbar {
  message: string;
  variant: 'success' | 'error' | 'warning' | 'info';
}

export const useSnackBar = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSnackBar = (button: ISnackbar) => {
    enqueueSnackbar(button.message, { variant: button.variant });
  };
  return { handleSnackBar };
};
