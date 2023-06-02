import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './eventDetail.scss';
import { useState } from 'react';

export function EventDetail({ data, updateData, labels, inputProperties }) {
  const { t } = useTranslation();
  const { place, title } = inputProperties;
  const [currentlyActive, setCurrentlyActive] = useState(false);

  function onCurrentlyActive() {
    setCurrentlyActive(!currentlyActive);
    updateData({ currentlyActive: !currentlyActive, end: '' });
  }
  return (
    <div className="event-detail">
      <div className="half-width">
        <TextField
          value={data?.[place]}
          label={t`${labels[0].label}`}
          variant="outlined"
          placeholder={t`${labels[0].placeholder}`}
          margin="normal"
          fullWidth
          required
          onChange={(event) => {
            updateData({ [place]: event.target.value });
          }}
        />
      </div>
      <div className="half-width">
        <TextField
          value={data?.[title]}
          label={t`${labels[1].label}`}
          variant="outlined"
          placeholder={t`${labels[1].placeholder}`}
          margin="normal"
          fullWidth
          required
          onChange={(event) => {
            updateData({ [title]: event.target.value });
          }}
        />
      </div>
      <div className="full-width">
        <FormControlLabel
          control={<Checkbox checked={currentlyActive} onChange={onCurrentlyActive} />}
          label={t`I currently have this position`}
        />
      </div>
      <div className="half-width">
        <TextField
          value={data?.start}
          type="date"
          label={t`${labels[2].label}`}
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          margin="normal"
          fullWidth
          required
          onChange={(event) => {
            updateData({ start: event.target.value });
          }}
        />
      </div>
      <div className="half-width">
        <TextField
          value={data?.end}
          disabled={currentlyActive}
          type="date"
          label={t`${labels[3].label}`}
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          margin="normal"
          fullWidth
          required
          onChange={(event) => {
            updateData({ end: event.target.value });
          }}
        />
      </div>
      <div className="full-width">
        <TextField
          value={data.description}
          label={t`${labels[4].label}`}
          variant="outlined"
          placeholder={t`${labels[4].placeholder}`}
          margin="normal"
          fullWidth
          multiline
          required
          onChange={(event) => {
            updateData({ description: event.target.value });
          }}
        />
      </div>
    </div>
  );
}
