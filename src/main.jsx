import { ThemeProvider } from '@emotion/react';
import { Button, createTheme } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { InitialForm } from './components/InitialForm';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import NotFound from './components/NotFound';
import { Preview } from './components/Preview';
import './styles/index.scss';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ED7155',
        },
        secondary: {
            main: '#7DCAE8',
        },
    },
});
export const UserContext = React.createContext({});

const values = {
    userImg: localStorage.getItem('userImg') || '',
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
                        <Route
                            path="preview/*"
                            element={
                                <>
                                    <div className="mw7 center">
                                        <Button
                                            id="download-print-btn"
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => {
                                                document.title= `${values.name}`;
                                                window.print();
                                            }}
                                        >
                                            Descargar/Imprimir
                                        </Button>
                                    </div>
                                    <div id="preview-container">
                                        <Preview />
                                    </div>
                                </>
                            }
                        />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
            <Footer />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
