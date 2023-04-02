import { Alert, Button, Divider, Snackbar, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { Fragment, useContext, useState } from 'react';
import { UserContext } from '../../../main';
import { emptyuserData } from '../../../models/user';

export function Education({ setStep }) {
  const user = useContext(UserContext);
  const { education } = user.data;
  const [alert, setAlert] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    localStorage.setItem('education', JSON.stringify(education));
    setStep(2);
  }
  function updateEducation(index, data) {
    const educationUpdated = [...education];
    educationUpdated[index] = { ...educationUpdated[index], ...data };
    user.update({ education: educationUpdated });
  }
  function deleteEducation(index) {
    const educationUpdated = education.filter((item, n) => n !== index);
    user.update({ education: educationUpdated });
  }
  function addEducation() {
    user.update({ education: education.concat(emptyuserData.education) });
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
        <div className="mt4 education" id="education">
          <h2>Educación</h2>
          <div className="education__item">
            <div className="half-width">
              <TextField
                value={education[0]?.institution}
                label="Nombre de la institución:"
                variant="outlined"
                placeholder="UPP, CISCO, ..."
                margin="normal"
                fullWidth
                required
                onChange={(event) => {
                  updateEducation(0, { institution: event.target.value });
                }}
              />
            </div>
            <div className="half-width">
              <TextField
                value={education[0]?.title}
                label="Nombre de la carrera o certificado"
                variant="outlined"
                placeholder="Ing. Software, Cloud computing, ..."
                margin="normal"
                fullWidth
                required
                onChange={(event) => {
                  updateEducation(0, { title: event.target.value });
                }}
              />
            </div>
            <div className="half-width">
              <TextField
                value={education[0]?.start}
                type="date"
                label="Fecha de inicio"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                onChange={(event) => {
                  updateEducation(0, { start: event.target.value });
                }}
              />
            </div>
            <div className="half-width">
              <TextField
                value={education[0]?.end}
                type="date"
                label="Fecha de finalización"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                onChange={(event) => {
                  updateEducation(0, { end: event.target.value });
                }}
              />
            </div>
          </div>
          {education.map((item, index) => {
            if (index === 0) {
              return;
            }
            return (
              <Fragment key={`fragment-${index}`}>
                <Divider className="education__divider" textAlign="right" key={`divider${index}`}>
                  <Button>
                    <ClearIcon color="error" onClick={() => deleteEducation(index)} />
                  </Button>
                </Divider>
                <div className="education__item" key={`education-item${index}`}>
                  <div className="half-width">
                    <TextField
                      value={education[index]?.institution}
                      label="Nombre de la institución:"
                      variant="outlined"
                      placeholder="UPP, CISCO, ..."
                      margin="normal"
                      fullWidth
                      required
                      onChange={(event) => {
                        updateEducation(index, { institution: event.target.value });
                      }}
                    />
                  </div>
                  <div className="half-width">
                    <TextField
                      value={education[index]?.title}
                      label="Nombre de la carrera o certificado"
                      variant="outlined"
                      placeholder="Ing. Software, Cloud computing, ..."
                      margin="normal"
                      fullWidth
                      required
                      onChange={(event) => {
                        updateEducation(index, { title: event.target.value });
                      }}
                    />
                  </div>
                  <div className="half-width">
                    <TextField
                      value={education[index]?.start}
                      type="date"
                      label="Fecha de inicio"
                      InputLabelProps={{ shrink: true }}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      required
                      onChange={(event) => {
                        updateEducation(index, { start: event.target.value });
                      }}
                    />
                  </div>
                  <div className="half-width">
                    <TextField
                      value={education[index]?.end}
                      type="date"
                      label="Fecha de finalización"
                      InputLabelProps={{ shrink: true }}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      required
                      onChange={(event) => {
                        updateEducation(index, { end: event.target.value });
                      }}
                    />
                  </div>
                </div>
              </Fragment>
            );
          })}
          <Button
            className="education__add"
            variant="outlined"
            startIcon={<AddIcon />}
            color="secondary"
            onClick={addEducation}
          >
            Agregar otra
          </Button>
        </div>
        <div className="flex justify-end mt3">
          <Button variant="outlined" onClick={() => setStep(0)} color="primary">
            Anterior
          </Button>
          <Button type="submit" sx={{ marginLeft: '1rem' }} variant="contained" color="primary">
            Siguiente
          </Button>
        </div>
      </form>
    </Fragment>
  );
}
