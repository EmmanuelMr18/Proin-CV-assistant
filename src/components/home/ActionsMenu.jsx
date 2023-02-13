import { useContext, useState } from 'react';
import { Button, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { exportObj, importText } from '../../data/utlis';
import { UserContext } from '../../main';
import { emptyuserData } from '../../models/user';

export function ActionsMenu() {
  const user = useContext(UserContext);
  const [actionsEl, setActionsEl] = useState(null);

  function handleActionsBtn(event) {
    setActionsEl(event.currentTarget);
  }
  function handleOnClose() {
    setActionsEl(null);
  }
  async function importData(event) {
    const dataImported = await importText(event);
    const dataObj = JSON.parse(dataImported);
    user.update({ ...dataObj });
  }
  function exportData() {
    const filename = `${user.data.name} proinCV.json`;
    exportObj(user.data, filename);
  }
  function deleteData() {
    user.update({ ...emptyuserData });
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
        <label htmlFor="import-data">
          <MenuItem onClick={handleOnClose}>
            <ListItemIcon>
              <FileUploadOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Cargar datos</ListItemText>
          </MenuItem>
        </label>
        <MenuItem divider onClick={exportData}>
          <ListItemIcon>
            <FileDownloadOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Descargar datos</ListItemText>
        </MenuItem>
        <MenuItem onClick={deleteData}>
          <ListItemIcon>
            <DeleteOutlineOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Borrar datos</ListItemText>
        </MenuItem>
      </Menu>
      <input
        className="home__header__actions__hidden"
        type="file"
        id="import-data"
        onChange={importData}
      />
    </>
  );
}
