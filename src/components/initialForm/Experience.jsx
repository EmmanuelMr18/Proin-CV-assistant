import { Alert, Button, Divider, Snackbar, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { Fragment, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../main';
import { emptyuserData } from '../../models/user';

export function Experience({ setStep }) {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const { experience } = user.data;

  const [alert, setAlert] = useState(false);
  function onSubmit(e) {
    e.preventDefault();
    localStorage.setItem('experience', JSON.stringify(experience));
    navigate(`/`);
  }

  function updateExperience(index, data) {
    const experienceUpdated = [...experience];
    experienceUpdated[index] = { ...experienceUpdated[index], ...data };
    user.update({ experience: experienceUpdated });
  }
  function deleteExperience(index) {
    const experienceUpdated = experience.filter((item, n) => n !== index);
    user.update({ experience: experienceUpdated });
  }
  function addExperience() {
    user.update({ experience: experience.concat(emptyuserData.experience) });
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
        <div className="mt4 experience" id="experience">
          <h2>Experiencia laboral</h2>
          <div className="experience__item">
            <div className="half-width">
              <TextField
                value={experience[0]?.company}
                label="Compañia:"
                variant="outlined"
                placeholder="Microsoft, Rappi, ..."
                margin="normal"
                fullWidth
                required
                onChange={(event) => {
                  updateExperience(0, { company: event.target.value });
                }}
              />
            </div>
            <div className="half-width">
              <TextField
                value={experience[0]?.job}
                label="Puesto de trabajo"
                variant="outlined"
                placeholder="Data scientist, Software architect, ..."
                margin="normal"
                fullWidth
                required
                onChange={(event) => {
                  updateExperience(0, { job: event.target.value });
                }}
              />
            </div>
            <div className="half-width">
              <TextField
                value={experience[0]?.start}
                type="date"
                label="Fecha de inicio"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                onChange={(event) => {
                  updateExperience(0, { start: event.target.value });
                }}
              />
            </div>
            <div className="half-width">
              <TextField
                value={experience[0]?.end}
                type="date"
                label="Fecha de finalización"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                onChange={(event) => {
                  updateExperience(0, { end: event.target.value });
                }}
              />
            </div>
            <div className="full-width">
              <TextField
                value={experience[0]?.description}
                label="Descripción:"
                variant="outlined"
                placeholder="Software enginner"
                margin="normal"
                fullWidth
                multiline
                required
                onChange={(event) => {
                  updateExperience(0, { description: event.target.value });
                }}
              />
            </div>
          </div>
          {experience.map((item, index) => {
            if (index === 0) {
              return;
            }
            return (
              <Fragment key={`fragment-${index}`}>
                <Divider className="experience__divider" textAlign="right" key={`divider${index}`}>
                  <Button>
                    <ClearIcon
                      color="error"
                      onClick={() => {
                        deleteExperience(index);
                      }}
                    />
                  </Button>
                </Divider>
                <div className="experience__item" key={`experience-item${index}`}>
                  <div className="half-width">
                    <TextField
                      value={experience[index]?.company}
                      label="Compañia:"
                      variant="outlined"
                      placeholder="Microsoft, Rappi, ..."
                      margin="normal"
                      fullWidth
                      required
                      onChange={(event) => {
                        updateExperience(index, { company: event.target.value });
                      }}
                    />
                  </div>
                  <div className="half-width">
                    <TextField
                      value={experience[index]?.job}
                      label="Puesto de trabajo"
                      variant="outlined"
                      placeholder="Data scientist, Software architect, ..."
                      margin="normal"
                      fullWidth
                      required
                      onChange={(event) => {
                        updateExperience(index, { job: event.target.value });
                      }}
                    />
                  </div>
                  <div className="half-width">
                    <TextField
                      value={experience[index]?.start}
                      type="date"
                      label="Fecha de inicio"
                      InputLabelProps={{ shrink: true }}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      required
                      onChange={(event) => {
                        updateExperience(index, { start: event.target.value });
                      }}
                    />
                  </div>
                  <div className="half-width">
                    <TextField
                      value={experience[index]?.end}
                      type="date"
                      label="Fecha de finalización"
                      InputLabelProps={{ shrink: true }}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      required
                      onChange={(event) => {
                        updateExperience(index, { end: event.target.value });
                      }}
                    />
                  </div>
                  <div className="full-width">
                    <TextField
                      value={experience[index]?.description}
                      label="Descripción:"
                      variant="outlined"
                      placeholder="Software enginner"
                      margin="normal"
                      fullWidth
                      multiline
                      required
                      onChange={(event) => {
                        updateExperience(index, { description: event.target.value });
                      }}
                    />
                  </div>
                </div>
              </Fragment>
            );
          })}
          <Button
            className="experience__add"
            variant="outlined"
            startIcon={<AddIcon />}
            color="secondary"
            onClick={addExperience}
          >
            Agregar otra
          </Button>
        </div>
        <div className="flex justify-end mt3">
          <Button variant="outlined" onClick={() => setStep(1)} color="primary">
            Anterior
          </Button>
          <Button type="submit" sx={{ marginLeft: '1rem' }} variant="contained" color="primary">
            Finalizar
          </Button>
        </div>
      </form>
    </Fragment>
  );
}
