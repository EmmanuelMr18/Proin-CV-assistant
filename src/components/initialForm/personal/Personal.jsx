import ClearIcon from '@mui/icons-material/Clear';
import { Alert, Button, InputAdornment, Snackbar, TextField } from '@mui/material';
import { Fragment, useContext, useState } from 'react';
import { UserContext } from '../../../main';
import { Languages } from './Languages';
import { Skills } from './Skills';
import { AvatarSection } from './AvatarSection';
import { useTranslation } from 'react-i18next';

export function Personal({ setStep }) {
  const user = useContext(UserContext);
  const { t } = useTranslation();
  const { name, job, description, achievements, contacts } = user.data;
  const [alert, setAlert] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
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
          <h2 className="">{t(`General Information`)}</h2>
          <div id="photo">
            <AvatarSection />
          </div>
          <div id="name">
            <TextField
              value={name}
              label={t(`What is your name?`)}
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
              label={t(`What job position are you applying for?`)}
              variant="outlined"
              placeholder="Software enginner"
              margin="normal"
              fullWidth
              required
              onChange={(event) => user.update({ job: event.target.value })}
            />
          </div>
          <div className="half-width">
            <Languages />
          </div>
          <div className="half-width">
            <Skills />
          </div>
          <div className="full-width">
            <TextField
              value={description}
              label={t(`Description`)}
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
              label={t(`Achievements`)}
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
              {t(`Add achievement`)}
            </Button>
          </div>
        </div>
        <div id="contact">
          <h2>{t(`Contact`)}</h2>
          <div className="half-width">
            <TextField
              value={contacts[0]}
              label={t(`Email Address`)}
              variant="outlined"
              placeholder="johnDoe@gmail.com"
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
              {t(`Add contact`)}
            </Button>
          </div>
        </div>
        <div className="flex justify-end">
          <Button sx={{ marginLeft: '1rem' }} variant="contained" type="submit" color="primary">
            {t(`Next`)}
          </Button>
        </div>
      </form>
    </Fragment>
  );
}
