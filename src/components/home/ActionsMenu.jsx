import { useState } from 'react';
import { Button, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export function ActionsMenu() {
  const [actionsEl, setActionsEl] = useState(null);

  function handleActionsBtn(event) {
    setActionsEl(event.currentTarget);
  }
  function handleOnClose() {
    setActionsEl(null);
  }
  return (
    <>
      <Button
        color="secondary"
        endIcon={<ExpandMoreIcon />}
        onClick={handleActionsBtn}
        variant="contained"
      >
        Más acciones
      </Button>
      <Menu id="basic-menu" anchorEl={actionsEl} open={Boolean(actionsEl)} onClose={handleOnClose}>
        <MenuItem onClick={handleOnClose}>
          <ListItemIcon>
            <FileUploadOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Cargar datos</ListItemText>
        </MenuItem>
        <MenuItem divider onClick={handleOnClose}>
          <ListItemIcon>
            <FileDownloadOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Descargar datos</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleOnClose}>
          <ListItemIcon>
            <DeleteOutlineOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Borrar datos</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
