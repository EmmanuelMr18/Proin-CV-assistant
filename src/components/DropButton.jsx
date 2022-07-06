import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { useNavigate } from 'react-router-dom';
import { Fragment, useContext, useState } from 'react';
import { UserContext } from '../main';

//Modal
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const options = ['Importar', 'Editar Datos', 'Exportar'];



export default function SplitButton() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const navigate = useNavigate();

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  //Datos del local storage
  const user = useContext(UserContext);

  const [userImg, setUserImg] = useState(user.userImg);
  const [name, setName] = useState(user.name);
  const [job, setJob] = useState(user.job);
  const [languages, setLanguages] = useState(user.languages);
  const [skills, setSkills] = useState(user.skills);
  const [description, setDescription] = useState(user.description);
  const [achievements, setAchievements] = useState(user.achievements);
  const [contacts, setContacts] = useState(user.contacts);
  const [alert, setAlert] = useState(false);
  const [languagesInput, setLanguagesInput] = useState('');
  const [skillsInput, setSkillsInput] = useState('');

  const handleClick = () => {
    switch(options[selectedIndex]){
      case 'Importar':
        //Aqui va la funcion de importar
        handleOpen2();
        break;
      case 'Editar Datos':
        navigate(`/fill-data`);
        break;
      case 'Exportar':
        //Aqui va la funcion de exportar
        handleOpen1();
        break;
    }
  };

  //Importar JSON
  const importData = (event) => {
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
  }

  function onReaderLoad(event){
    //alert(event.target.result);
    // var obj = JSON.parse(event.target.result);
    // alert(obj);
    let obj = JSON.parse(event.target.result);
    // console.log(obj);
    // console.log(obj.experience[0].company);

    // localStorage.setItem('userImg', obj.userImg);
    localStorage.setItem('name', obj.name);
    localStorage.setItem('job', JSON.stringify(obj.job));
    // localStorage.setItem('languages', obj.languages);
    localStorage.setItem('languages', JSON.stringify(obj.languages));
    localStorage.setItem('skills', JSON.stringify(obj.skills));
    localStorage.setItem('description', obj.description);
    localStorage.setItem('achievements', JSON.stringify(obj.achievements));
    localStorage.setItem('contacts', JSON.stringify(obj.contacts));
    // localStorage.setItem('education', JSON.stringify(obj.education[0].institution));
    // localStorage.setItem('education', JSON.stringify(obj.education[0].title));
    // localStorage.setItem('education', JSON.stringify(obj.education[0].start));
    // localStorage.setItem('education', JSON.stringify(obj.education[0].end));
    // localStorage.setItem('experience', JSON.stringify(obj.experience[0].company));
    // localStorage.setItem('experience', JSON.stringify(obj.experience[0].job));
    // localStorage.setItem('experience', JSON.stringify(obj.experience[0].start));
    // localStorage.setItem('experience', JSON.stringify(obj.experience[0].start));
    // localStorage.setItem('experience', JSON.stringify(obj.experience[0].description));

  }

  //Exportar JSON

  const filename = "datos.json"

  function saveJSON(data, filename){
      if(!data) {
          console.error('No data')
          return;
      }

      if(!filename) filename = 'console.json'

      if(typeof data === "object"){
          data = JSON.stringify(data, undefined, 4)
      }

      var blob = new Blob([data], {type: 'text/json'}),
          e    = document.createEvent('MouseEvents'),
          a    = document.createElement('a')

      a.download = filename
      a.href = window.URL.createObjectURL(blob)
      a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
      e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      a.dispatchEvent(e)
  }

  const exportData = () => {
    // console.log(user)
    saveJSON(user, filename);
  }

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button" color="secondary">
        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}

        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 4}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

      {/* Modal */}
      <div>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Exportar
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Guardar tus datos
          </Typography>
          <button onClick={exportData}>Guardar archivo</button>
        </Box>
      </Modal>
    </div>

     {/* Modal */}
      <div>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Importar
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Sube el documento JSON con tus datos
          </Typography>
          <input type="file" name="dataJSON" id="dataJSON" onChange={importData}/>
          <br /> <br />
          <a href="/"><button>Subir</button></a>
        </Box>
      </Modal>
    </div>
    </React.Fragment>
  );
}

