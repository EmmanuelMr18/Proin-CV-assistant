import ClearIcon from '@mui/icons-material/Clear';
import {
  Alert,
  Button,
  Chip,
  Input,
  InputAdornment,
  InputLabel,
  Snackbar,
  Stack,
  TextField
} from '@mui/material';
import { Fragment, useContext, useState } from 'react';
import { UserContext } from '../../../main';
import { Languages } from './Languages';
function readFile(file) {
  return new Promise((resolve) => {
    const reader = new window.FileReader();
    reader.addEventListener('load', () => {
      resolve(reader.result), false;
    });
    reader.readAsDataURL(file);
  });
}

export function Personal({ setStep }) {
  const user = useContext(UserContext);
  const { userImg, name, job, languages, skills, description, achievements, contacts } = user.data;
  const [alert, setAlert] = useState(false);
  const [skillsInput, setSkillsInput] = useState('');

  function onSubmit(event) {
    event.preventDefault();
    const data = {
      userImg,
      name,
      job,
      languages: JSON.stringify(languages),
      skills: JSON.stringify(skills),
      description,
      achievements: JSON.stringify(achievements),
      contacts: JSON.stringify(contacts)
    };
    Object.entries(data).forEach((item) => {
      localStorage.setItem(item[0], item[1]);
    });
    setStep(1);
  }
  return (
    <Fragment>
      <Snackbar
        open={!!alert}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={6000}
        onClose={() => setAlert(false)}
      >
        <Alert onClose={() => setAlert(false)} severity="error" sx={{ width: '100%' }}>
          {alert}
        </Alert>
      </Snackbar>
      <form onSubmit={onSubmit} className="mb5">
        <div className="mt4" id="personal">
          <h2 className="">Información general</h2>
          <label id="upload-photo" htmlFor="contained-button-file">
            {userImg && (
              <div className="w4 h4 overflow-hidden">
                <img
                  className="w-100 h-100"
                  src={userImg}
                  alt="name"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
            <Input
              accept="image/*"
              id="contained-button-file"
              type="file"
              onChange={async (event) => {
                const file = Object.values(event.target.files)[0];
                const imageDataUrl = await readFile(file);
                user.update({ userImg: imageDataUrl });
              }}
            />
          </label>
          <div id="name">
            <TextField
              value={name}
              label="¿Cuál es tu nombre?"
              variant="outlined"
              placeholder="Johndoe"
              required
              fullWidth
              onChange={(event) => user.update({ name: event.target.value })}
            />
          </div>
          <div id="job">
            <TextField
              value={job}
              label="¿A qué puesto quieres aplicar?"
              variant="outlined"
              placeholder="Software enginner"
              margin="normal"
              fullWidth
              required
              onChange={(event) => user.update({ job: event.target.value })}
            />
          </div>
          <div className="half-width">
            <InputLabel className="w-100" shrink>
              ¿Qué idiomas hablas?
            </InputLabel>
            <Languages />
          </div>
          <div className="half-width">
            <InputLabel className="w-100" shrink>
              ¿Cuáles son tus habilidades?
            </InputLabel>
            <div className="flex flex-wrap w-100">
              <TextField
                variant="standard"
                placeholder="Javascript"
                InputLabelProps={{ shrink: true }}
                value={skillsInput}
                onChange={(event) => setSkillsInput(event.target.value)}
                onKeyPress={(e) => {
                  // const value = skillsInput.current.value;
                  if (e.key === 'Enter' && skillsInput.length === 0) {
                    event.preventDefault();
                    return;
                  }
                  if (e.key === 'Enter') {
                    event.preventDefault();
                    if (skills.includes(skillsInput)) {
                      setAlert('Ya agregaste esta habilidad');
                      return;
                    }
                    user.update({ skills: skills.concat(skillsInput) });
                    setSkillsInput('');
                    return;
                  }
                }}
                fullWidth
              />
              <Stack className="overflow-x-auto mw-100 pt2" direction="row" spacing={1}>
                {skills.length > 0 &&
                  skills.map((skill) => {
                    return (
                      <Chip
                        key={skill}
                        label={skill}
                        onDelete={() => {
                          user.update({ skills: skills.filter((item) => item !== skill) });
                        }}
                      />
                    );
                  })}
              </Stack>
            </div>
          </div>
          <div className="full-width">
            <TextField
              value={description}
              label="Descripción:"
              variant="outlined"
              placeholder="Software enginner"
              margin="normal"
              fullWidth
              multiline
              required
              onChange={(event) => user.update({ description: event.target.value })}
            />
          </div>
          <div className="half-width">
            <TextField
              value={achievements[0]}
              label="Logros:"
              variant="outlined"
              placeholder="Ganador del concurso..."
              margin="normal"
              fullWidth
              onChange={(event) => {
                const listUpdated = [...achievements];
                listUpdated[0] = event.target.value;
                user.update({ achievements: listUpdated });
              }}
            />
          </div>
          {achievements.map((achievement, index) => {
            if (index === 0) {
              return;
            }
            return (
              <div className="half-width" key={`archievemnt-${index}`}>
                <TextField
                  // label="Logros:"
                  value={achievement}
                  variant="outlined"
                  placeholder="..."
                  margin="normal"
                  fullWidth
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        className="pointer"
                        position="end"
                        onClick={() => {
                          const listUpdated = achievements.filter((item, n) => index !== n);
                          user.update({ achievements: listUpdated });
                        }}
                      >
                        <ClearIcon />
                      </InputAdornment>
                    )
                  }}
                  onChange={(event) => {
                    const listUpdated = [...achievements];
                    listUpdated[index] = event.target.value;
                    user.update({ achievements: listUpdated });
                  }}
                />
              </div>
            );
          })}
          <div className="half-width form-btn">
            <Button
              variant="outlined"
              onClick={() => {
                user.update({ achievements: achievements.concat('') });
              }}
              color="secondary"
            >
              Agregar logro
            </Button>
          </div>
        </div>
        <div id="contact">
          <h2>Contacto</h2>
          <div className="half-width">
            <TextField
              value={contacts[0]}
              label="Correo electrónico:"
              variant="outlined"
              placeholder="emman.mr@gmail.com"
              margin="normal"
              fullWidth
              onChange={(event) => {
                const contactsUpdated = [...contacts];
                contactsUpdated[0] = event.target.value;
                user.update({ contacts: contactsUpdated });
              }}
              required
            />
          </div>
          <div className="half-width">
            <TextField
              value={contacts[1]}
              label="Linkedin:"
              variant="outlined"
              placeholder="https://www.linkedin.com/in/emmanuel-mr18/"
              margin="normal"
              fullWidth
              onChange={(event) => {
                const contactsUpdated = [...contacts];
                contactsUpdated[1] = event.target.value;
                user.update({ contacts: contactsUpdated });
              }}
            />
          </div>
          {contacts.map((contact, index) => {
            if (index === 0 || index === 1) {
              return;
            }
            return (
              <div className="half-width" key={`contact-${index}`}>
                <TextField
                  // label="Logros:"
                  value={contact}
                  variant="outlined"
                  placeholder="..."
                  margin="normal"
                  fullWidth
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        className="pointer"
                        position="end"
                        onClick={() => {
                          user.update({ contacts: contacts.filter((item, n) => index !== n) });
                        }}
                      >
                        <ClearIcon />
                      </InputAdornment>
                    )
                  }}
                  onChange={(event) => {
                    const contactsUpdated = [...contacts];
                    contactsUpdated[index] = event.target.value;
                    user.update({ contacts: contactsUpdated });
                  }}
                />
              </div>
            );
          })}
          <div className="half-width form-btn">
            <Button
              variant="outlined"
              onClick={() => {
                user.update({ contacts: contacts.concat('') });
              }}
              color="secondary"
            >
              Agregar contacto
            </Button>
          </div>
        </div>
        <div className="flex justify-end">
          <Button sx={{ marginLeft: '1rem' }} variant="contained" type="submit" color="primary">
            Guardar y continuar
          </Button>
        </div>
      </form>
    </Fragment>
  );
}
