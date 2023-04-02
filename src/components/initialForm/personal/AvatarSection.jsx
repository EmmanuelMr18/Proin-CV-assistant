import { Avatar, IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { useContext, useRef, useState } from 'react';
import { UserContext } from '../../../main';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { readFile } from '../../../utils/utils';

export function AvatarSection() {
  const user = useContext(UserContext);
  const userImgInput = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { userImg } = user.data;

  function handleOpenMenu(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleCloseMenu() {
    setAnchorEl(null);
  }
  function openFileInput() {
    userImgInput.current.click();
    setAnchorEl(null);
  }
  function deleteUserImg() {
    user.update({ userImg: '' });
    userImgInput.current.value = '';
    setAnchorEl(null);
  }
  return (
    <>
      {userImg && (
        <IconButton onClick={handleOpenMenu}>
          <Avatar src={userImg} sx={{ width: 128, height: 128 }} />
        </IconButton>
      )}
      {!userImg && (
        <IconButton onClick={openFileInput}>
          <Avatar sx={{ width: 128, height: 128 }} />
        </IconButton>
      )}
      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
        <MenuItem>
          <ListItemIcon>
            <EditOutlinedIcon />
          </ListItemIcon>
          <ListItemText onClick={openFileInput}>Editar</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DeleteOutlineIcon />
          </ListItemIcon>
          <ListItemText onClick={deleteUserImg}>Eliminar</ListItemText>
        </MenuItem>
      </Menu>

      <input
        ref={userImgInput}
        accept="image/png, image/gif, image/jpeg"
        id="contained-button-file"
        type="file"
        onChange={async (event) => {
          const file = Object.values(event.target.files)[0];
          const imageDataUrl = await readFile(file);
          user.update({ userImg: imageDataUrl });
        }}
      />
    </>
  );
}
