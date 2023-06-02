import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './eventDetail.scss';

export function EventDetail({ data, updateData, labels }) {
  const { t } = useTranslation();
  return (
    <div className="event-detail">
      <div className="half-width">
        <TextField
          value={data?.institution}
          label={t`${labels[0].label}`}
          variant="outlined"
          placeholder={t`${labels[0].placeholder}`}
          margin="normal"
          fullWidth
          required
          onChange={(event) => {
            updateData({ institution: event.target.value });
          }}
        />
      </div>
      <div className="half-width">
        <TextField
          value={data?.title}
          label={t`${labels[1].label}`}
          variant="outlined"
          placeholder={t`${labels[1].placeholder}`}
          margin="normal"
          fullWidth
          required
          onChange={(event) => {
            updateData({ title: event.target.value });
          }}
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
