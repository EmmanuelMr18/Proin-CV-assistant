import { Button, Divider } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { EventDetail } from '../../eventDetail/EventDetail';

const labels = [
  {
    label: 'Institution Name',
    placeholder: 'UPP, CISCO, ...'
  },
  {
    label: 'Name of degree or certificate',
    placeholder: 'Cloud computing'
  },
  { label: 'Start Date' },
  { label: 'End Date' },
  { label: 'Description', placeholder: '...' }
];

export function EducationItem({
  index,
  education,
  onUpdateEducation,
  onDeleteAction,
  moveEducationUp,
  moveEducationDown,
  displayDownBtn,
  displayUpBtn,
  displayDeleteBtn
}) {
  return (
    <>
      <Divider className="education__divider" textAlign="right">
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
        data={education}
        updateData={(changes) => onUpdateEducation(index, changes)}
        labels={labels}
        inputProperties={{ place: 'institution', title: 'title' }}
      />
    </>
  );
}
