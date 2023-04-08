import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useUserData } from '../hooks/useUserData';
import { UserContext } from '../main';
import { GettingStarted } from './gettingStarted/GettingStarted';
// import { Authentication } from './Authentication';
import { Home } from './home/Home';
import { InitialForm } from './initialForm/InitialForm';
import { Login } from './login/Login';
import { Preview } from './preview/Preview';
import { Navbar } from './shared/Navbar';
import NotFound from './shared/NotFound';

export default function AppRouter() {
  const userData = useUserData();
  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={userData}>
          <div id="app">
            <Navbar />
            <div id="content">
              <Routes>
                <Route element={<NotFound />} path="*" />
                <Route element={<Home />} path="/" />
                <Route element={<Login />} path="/login" />
                <Route element={<InitialForm />} path="/fill-data" />
                <Route element={<GettingStarted />} path="getting-started" />
                <Route element={<Preview />} path="preview/*" />
              </Routes>
            </div>
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
