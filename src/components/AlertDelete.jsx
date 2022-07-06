import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { IconButton } from '@mui/material';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    localStorage.clear();
    window.location.reload()
  };

  const handleClose = (event, reason) => {
    
    if (reason === 'clickaway') {
      
      return;
    }

    setOpen(false);
  };

  return (
    <Stack>
      <IconButton aria-label="Default" 
                    onClick={(handleClick)}
                  >
                    <DeleteRoundedIcon/>
                    
                    </IconButton>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Se borraron los datos
        </Alert>
      </Snackbar>
    </Stack>
  );
}

