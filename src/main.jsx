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
export const UserContext = React.createContext({});

const values = {
    img: localStorage.getItem('userImg') || '',
    name: localStorage.getItem('name') || '',
    job: localStorage.getItem('job') || '',
    languages: JSON.parse(localStorage.getItem('languages')) || [],
    skills: JSON.parse(localStorage.getItem('skills')) || [],
    description: localStorage.getItem('description') || '',
    achievements: JSON.parse(localStorage.getItem('achievements')) || [''],
    contacts: JSON.parse(localStorage.getItem('contacts')) || [''],
    education: JSON.parse(localStorage.getItem('education')) || [
        { institution: '', title: '', start: '', end: '' },
    ],
    experience: JSON.parse(localStorage.getItem('experience')) || [
        { company: '', job: '', start: '', end: '', description: '' },
    ],
};

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Navbar />
            <BrowserRouter>
                <UserContext.Provider value={values}>
                    <Routes>
                        <Route path="*" element={<NotFound />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/fill-data" element={<InitialForm />} />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
