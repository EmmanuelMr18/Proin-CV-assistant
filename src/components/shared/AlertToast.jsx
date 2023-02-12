import { Alert, Snackbar } from '@mui/material';

export function AlertToast({ alert, onClose }) {
  return (
    <Snackbar
      open={!!alert}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={3000}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity="error" sx={{ width: '100%' }}>
        {alert}
      </Alert>
    </Snackbar>
  );
}
