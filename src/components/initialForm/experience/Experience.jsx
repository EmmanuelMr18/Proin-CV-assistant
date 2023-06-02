import { Alert, Button, Snackbar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Fragment, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../main';
import { emptyuserData } from '../../../models/user';
import { useTranslation } from 'react-i18next';
import { ExperienceItem } from './ExperienceItem';
import { moveArrayItem } from '../../../utils/utils';

export function Experience({ setStep }) {
  const { t } = useTranslation();
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
  function moveExperienceUp(from) {
    const experienceCopy = [...experience];
    const experienceReordered = moveArrayItem(experienceCopy, from, from - 1);
    user.update({ experience: experienceReordered });
  }
  function moveExperienceDown(from) {
    const experienceCopy = [...experience];
    const experienceReordered = moveArrayItem(experienceCopy, from, from + 1);
    user.update({ experience: experienceReordered });
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
          <h2> {t(`Experience`)}</h2>
          {experience.map((item, index, array) => {
            return (
              <div className="experience__item" key={index}>
                <ExperienceItem
                  experience={experience[index]}
                  onUpdateExperience={updateExperience}
                  onDeleteAction={deleteExperience}
                  moveEducationUp={moveExperienceUp}
                  moveEducationDown={moveExperienceDown}
                  displayDownBtn={index < array.length - 1}
                  displayUpBtn={index > 0}
                  displayDeleteBtn={index > 0}
                  index={index}
                />
                ;
              </div>
            );
          })}
          <Button
            className="experience__add"
            variant="outlined"
            startIcon={<AddIcon />}
            color="secondary"
            onClick={addExperience}
          >
            {t(`Add another`)}
          </Button>
        </div>
        <div className="flex justify-end mt3">
          <Button variant="outlined" onClick={() => setStep(1)} color="primary">
            {t(`Back`)}
          </Button>
          <Button type="submit" sx={{ marginLeft: '1rem' }} variant="contained" color="primary">
            {t(`Finish`)}
          </Button>
        </div>
      </form>
    </Fragment>
  );
}
