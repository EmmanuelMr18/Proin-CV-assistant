// import { ClassNames } from '@emotion/react';
import { LinearProgress } from '@mui/material';
import classNames from 'classnames';
import { useMemo } from 'react';

export function FormSteps({ step }) {
  const progress = useMemo(() => {
    switch (step) {
      case 1:
        return 50;
      case 2:
        return 100;
      default:
        return 0;
    }
  }, [step]);
  return (
    <div className="flex justify-center flex-column mw6 center" id="form-steps">
      <div className="w-100 flex justify-between mb2">
        <span className={classNames({ 'c-primary': step === 0 })}>Personal</span>
        <span className={classNames('mh3', { 'c-primary': step === 1 })}>Educación</span>
        <span className={classNames({ 'c-primary': step === 2 })}>Experiencia</span>
      </div>
      <div className="w-100">
        <LinearProgress
          variant="determinate"
          value={progress}
          color="primary"
          sx={{
            width: '100%',
            height: 8,
            borderRadius: 5
          }}
        />
      </div>
    </div>
  );
}
