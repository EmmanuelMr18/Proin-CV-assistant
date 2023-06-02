import { Alert, Button, Snackbar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Fragment, useContext, useState } from 'react';
import { UserContext } from '../../../main';
import { emptyuserData } from '../../../models/user';
import { useTranslation } from 'react-i18next';
import { EducationItem } from './EducationItem';
import { moveArrayItem } from '../../../utils/utils';

export function Education({ setStep }) {
  const { t } = useTranslation();
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
  function moveEducationUp(from) {
    const educationCopy = [...education];
    const educationReordered = moveArrayItem(educationCopy, from, from - 1);
    user.update({ education: educationReordered });
  }
  function moveEducationDown(from) {
    const educationCopy = [...education];
    const educationReordered = moveArrayItem(educationCopy, from, from + 1);
    user.update({ education: educationReordered });
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
          <h2>{t(`Education`)}</h2>
          {education.map((item, index, array) => {
            return (
              <div className="education__item" key={index}>
                <EducationItem
                  education={education[index]}
                  onUpdateEducation={updateEducation}
                  onDeleteAction={deleteEducation}
                  moveEducationUp={moveEducationUp}
                  moveEducationDown={moveEducationDown}
                  displayDownBtn={index < array.length - 1}
                  displayUpBtn={index > 0}
                  displayDeleteBtn={index > 0}
                  index={index}
                />
              </div>
            );
          })}
          <Button
            className="education__add"
            variant="outlined"
            startIcon={<AddIcon />}
            color="secondary"
            onClick={addEducation}
          >
            {t(`Add another`)}
          </Button>
        </div>
        <div className="flex justify-end mt3">
          <Button variant="outlined" onClick={() => setStep(0)} color="primary">
            {t(`Back`)}
          </Button>
          <Button type="submit" sx={{ marginLeft: '1rem' }} variant="contained" color="primary">
            {t(`Next`)}
          </Button>
        </div>
      </form>
    </Fragment>
  );
}
