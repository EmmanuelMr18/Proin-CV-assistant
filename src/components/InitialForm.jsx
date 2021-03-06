import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Education } from './Education';
import { Experience } from './Experience';
import { FormSteps } from './FormSteps';
import { Personal } from './Personal';

export function InitialForm() {
    const [params] = useSearchParams();
    const [step, setStep] = useState(Number(params.get('step')));
    return (
        <div className="mw8 mt4 center">
            <FormSteps step={step} setStep={setStep} />
            {step === 0 && <Personal setStep={setStep} />}
            {step === 1 && <Education setStep={setStep} />}
            {step === 2 && <Experience setStep={setStep} />}
        </div>
    );
}
