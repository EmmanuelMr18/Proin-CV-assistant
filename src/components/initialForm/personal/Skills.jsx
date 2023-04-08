import { Chip, InputLabel, Stack, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { UserContext } from '../../../main';
import { AlertToast } from '../../shared/AlertToast';
import { useTranslation } from 'react-i18next';

export function Skills() {
  const { t } = useTranslation();
  const user = useContext(UserContext);
  const { skills } = user.data;
  const [alert, setAlert] = useState();
  const [skillsInput, setSkillsInput] = useState('');
  return (
    <>
      <InputLabel className="w-100" shrink>
        {t(`What are your skills?`)}
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
      <AlertToast alert={alert} onClose={() => setAlert(false)} />
    </>
  );
}
