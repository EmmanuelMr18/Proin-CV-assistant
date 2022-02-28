import {
    Button,
    Chip,
    Input,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { Fragment } from 'react';

export function Personal() {
    return (
        <div className="mt4">
            <h1 className="fw5 f3">Información general</h1>
            <div className="flex justify-between">
                <label htmlFor="contained-button-file w-30">
                    <Input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                </label>
                <div className="w-60 ml3">
                    <TextField
                        label="¿Cuál es tu nombre?"
                        variant="outlined"
                        placeholder="Johndoe"
                        required
                        fullWidth
                    />
                    <TextField
                        label="¿A qué puesto quieres aplicar?"
                        variant="outlined"
                        placeholder="Software enginner"
                        margin="normal"
                        fullWidth
                        required
                    />
                </div>
            </div>
            <TextField
                label="¿Qué idiomas hablas?"
                variant="outlined"
                placeholder="Johndoe"
                startAdornment={
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                }
                required
                fullWidth
            />
            <TextField
                label="Descripción:"
                variant="outlined"
                placeholder="Software enginner"
                margin="normal"
                fullWidth
                multiline
                required
            />
        </div>
    );
}
