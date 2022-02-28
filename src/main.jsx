import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { InitialForm } from './components/InitialForm';
import { Navbar } from './components/Navbar';
import { NotFound } from './components/NotFound';
import './styles/index.scss';

const theme = createTheme({
    palette: {
        primary: {
            main: '#AEC3B0',
        },
        secondary: {
            main: '#01161E',
        },
    },
});
ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/fill-data" element={<InitialForm />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
