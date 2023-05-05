import { useCallback } from 'react';
import { useSnackbar } from 'notistack';
import AlertComponent from './Alert';

type IAlert = {
  message: string;
  variant: 'success' | 'error' | 'warning' | 'info';
};

export default {
  title: 'Components/Common/Alert',
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
    <>
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
    </>
  );
};
