import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Experience } from './Experience';
import { FormSteps } from './FormSteps';
import { Personal } from './Personal';
import { Education } from './Education';

export function InitialForm() {
  const [params] = useSearchParams();
  const [step, setStep] = useState(Number(params.get('step')));
  return (
    <div className="initial-form">
      <FormSteps step={step} setStep={setStep} />
      {step === 0 && <Personal setStep={setStep} />}
      {step === 1 && <Education setStep={setStep} />}
      {step === 2 && <Experience setStep={setStep} />}
    </div>
  );
}
