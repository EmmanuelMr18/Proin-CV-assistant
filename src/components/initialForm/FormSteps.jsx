// import { ClassNames } from '@emotion/react';
import { LinearProgress } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export function FormSteps({ step }) {
  const { t } = useTranslation();
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
        <span>{t(`Personal`)}</span>
        <span>{t(`Education`)}</span>
        <span>{t(`Experience`)}</span>
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
