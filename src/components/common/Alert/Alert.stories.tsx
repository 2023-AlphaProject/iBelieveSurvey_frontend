import { useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider, useSnackbar } from 'notistack';
import AlertComponent from './Alert';

type IAlert = {
  message: string;
  variant: 'success' | 'error' | 'warning' | 'info';
};

export default {
  title: 'Components/common/Alert',
  component: AlertComponent,
};

export const Alert: React.FC = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleAlert = useCallback(
    (button: IAlert) => () => {
      enqueueSnackbar(button.message, { variant: button.variant });
    },
    [enqueueSnackbar],
  );
  return (
    <BrowserRouter>
      <button
        type="button"
        onClick={handleAlert({
          variant: 'error',
          message: 'Error snackbar',
        })}
      >
        Show Error snackbar
      </button>
      <AlertComponent />
    </BrowserRouter>
  );
};
