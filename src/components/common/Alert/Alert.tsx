import { useState } from 'react';
import { SnackbarProvider } from 'notistack';
import IAlert from './types';

const Alert = ({ open, onClose }: IAlert) => {
  return <SnackbarProvider />;
};

export default Alert;
