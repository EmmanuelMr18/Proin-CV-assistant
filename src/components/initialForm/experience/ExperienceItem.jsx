import { Button, Divider } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { EventDetail } from '../../eventDetail/EventDetail';

const labels = [
  {
    label: 'Company',
    placeholder: '...'
  },
  {
    label: 'Job title',
    placeholder: '...'
  },
  { label: 'Start Date' },
  { label: 'End Date' },
  { label: 'Description', placeholder: '...' }
];

export function ExperienceItem({
  index,
  experience,
  onUpdateExperience,
  onDeleteAction,
  moveEducationUp,
  moveEducationDown,
  displayDownBtn,
  displayUpBtn,
  displayDeleteBtn
}) {
  console.log(experience);
  return (
    <>
      <Divider className="experience__divider" textAlign="right">
        <Button disabled={!displayUpBtn} onClick={() => moveEducationUp(index)}>
          <ArrowUpwardIcon />
        </Button>
        <Button disabled={!displayDownBtn} onClick={() => moveEducationDown(index)}>
          <ArrowDownwardIcon />
        </Button>
        <Button disabled={!displayDeleteBtn}>
          <ClearIcon
            color={!displayDeleteBtn ? '' : 'error'}
            onClick={() => onDeleteAction(index)}
          />
        </Button>
      </Divider>
      <EventDetail
        data={experience}
        updateData={(changes) => onUpdateExperience(index, changes)}
        labels={labels}
        inputProperties={{ place: 'company', title: 'job' }}
      />
    </>
  );
}
