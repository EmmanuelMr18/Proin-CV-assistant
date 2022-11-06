import { Button } from '@mui/material';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useUserData } from '../hooks/useUserData';
import { UserContext } from '../main';
import { Home } from './home/Home';
import { InitialForm } from './initialForm/InitialForm';
import { Preview } from './preview/Preview';
import { Navbar } from './shared/Navbar';
import NotFound from './shared/NotFound';

export default function AppRouter() {
  const userData = useUserData();
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <UserContext.Provider value={userData}>
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
                      onClick={() => {
                        window.print();
                      }}>
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
    </>
  );
}
