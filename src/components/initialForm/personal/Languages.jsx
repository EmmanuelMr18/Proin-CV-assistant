import { Chip, InputLabel, Stack, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { UserContext } from '../../../main';
import { AlertToast } from '../../shared/AlertToast';
import { useTranslation } from 'react-i18next';

export function Languages() {
  const { t } = useTranslation();
  const user = useContext(UserContext);
  const [alert, setAlert] = useState();
  const { languages } = user.data;
  const [languagesInput, setLanguagesInput] = useState('');
  return (
    <>
      <InputLabel className="w-100" shrink>
        {t(`What languages do you speak?`)}
      </InputLabel>
      <div className="flex flex-wrap w-100">
        <TextField
          value={languagesInput}
          variant="standard"
          placeholder="English..."
          InputLabelProps={{ shrink: true }}
          onChange={(event) => setLanguagesInput(event.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && languagesInput.length === 0) {
              event.preventDefault();
              return;
            }
            if (e.key === 'Enter') {
              event.preventDefault();
              if (languages.includes(languagesInput)) {
                setAlert(t(`Ya agregaste este idioma`));
                return;
              }
              user.update({ languages: languages.concat(languagesInput) });
              setLanguagesInput('');
              return;
            }
          }}
          fullWidth
        />
        <Stack className="overflow-x-auto mw-100 pt2" direction="row" spacing={1}>
          {languages.length > 0 &&
            languages.map((lang) => {
              return (
                <Chip
                  key={lang}
                  label={lang}
                  onDelete={() => {
                    user.update({ languages: languages.filter((item) => item !== lang) });
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
