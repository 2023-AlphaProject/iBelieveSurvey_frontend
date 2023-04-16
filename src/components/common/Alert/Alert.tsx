import { useState } from 'react';
import { Alert as AlertMui, Stack, Collapse } from '@mui/material';
import IAlert from './types';

const Alert = ({ open, onClose }: IAlert) => {
  return (
    <Stack spacing={2}>
      <Collapse in={open}>
        <AlertMui
          severity="info"
          onClose={() => {
            onClose();
          }}
        >
          This is an alert — check it out!
        </AlertMui>
        <AlertMui
          severity="success"
          onClose={() => {
            onClose();
          }}
        >
          This is an alert — check it out!
        </AlertMui>
      </Collapse>
    </Stack>
  );
};

export default Alert;
