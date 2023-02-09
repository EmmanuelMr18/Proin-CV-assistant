import { Alert, Button, Divider, Snackbar, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { Fragment, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../main';

const emptyExperience = {
  company: '',
  job: '',
  start: '',
  end: '',
  description: ''
};
export function Experience({ setStep }) {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();
  const [experience, setExperience] = useState(userData.experience);
  const [alert, setAlert] = useState(false);
  function onSubmit(e) {
    e.preventDefault();
    localStorage.setItem('experience', JSON.stringify(experience));
    navigate(`/`);
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
                  setExperience((prev) => {
                    const listUpdated = [...prev];
                    listUpdated[0].company = event.target.value;
                    return listUpdated;
                  });
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
                  setExperience((prev) => {
                    const listUpdated = [...prev];
                    listUpdated[0].job = event.target.value;
                    return listUpdated;
                  });
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
                  setExperience((prev) => {
                    const listUpdated = [...prev];
                    listUpdated[0].start = event.target.value;
                    return listUpdated;
                  });
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
                  setExperience((prev) => {
                    const listUpdated = [...prev];
                    listUpdated[0].end = event.target.value;
                    return listUpdated;
                  });
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
                onChange={(event) =>
                  setExperience((prev) => {
                    const listUpdated = [...prev];
                    listUpdated[0].description = event.target.value;
                    return listUpdated;
                  })
                }
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
                      onClick={() => setExperience((prev) => prev.filter((item, n) => n !== index))}
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
                        setExperience((prev) => {
                          const listUpdated = [...prev];
                          listUpdated[index].company = event.target.value;
                          return listUpdated;
                        });
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
                        setExperience((prev) => {
                          const listUpdated = [...prev];
                          listUpdated[index].job = event.target.value;
                          return listUpdated;
                        });
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
                        setExperience((prev) => {
                          const listUpdated = [...prev];
                          listUpdated[index].start = event.target.value;
                          return listUpdated;
                        });
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
                        setExperience((prev) => {
                          const listUpdated = [...prev];
                          listUpdated[index].end = event.target.value;
                          return listUpdated;
                        });
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
                      onChange={(event) =>
                        setExperience((prev) => {
                          const listUpdated = [...prev];
                          listUpdated[index].description = event.target.value;
                          return listUpdated;
                        })
                      }
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
            onClick={() =>
              setExperience((prev) => [
                ...prev,
                {
                  ...emptyExperience
                }
              ])
            }
          >
            Agregar otra
          </Button>
        </div>
        <div className="flex justify-end mt3">
          <Button variant="outlined" onClick={() => setStep(1)} color="primary">
            Cancelar y volver
          </Button>
          <Button type="submit" sx={{ marginLeft: '1rem' }} variant="contained" color="primary">
            Guardar y finalizar
          </Button>
        </div>
      </form>
    </Fragment>
  );
}
