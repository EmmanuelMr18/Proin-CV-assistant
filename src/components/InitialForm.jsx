import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FormSteps } from './FormSteps';
import { Personal } from './Personal';

export function InitialForm() {
    const [params] = useSearchParams();
    const [step, setStep] = useState(Number(params.get('step')));
    return (
        <div className="mw8 mt4 center">
            <FormSteps step={step} />
            {step === 0 && <Personal />}
            <div className="flex justify-end">
                {step != 0 && (
                    <Button
                        variant="outlined"
                        onClick={() => setStep(step - 1)}
                        color="primary"
                    >
                        Anterior
                    </Button>
                )}
                <Button
                    sx={{ marginLeft: '1rem' }}
                    variant="contained"
                    onClick={() => {
                        if (step === 2) {
                        }
                        setStep(step + 1);
                    }}
                    color="primary"
                >
                    {step != 2 ? 'Siguiente' : 'Finalizar'}
                </Button>
            </div>
        </div>
    );
}
