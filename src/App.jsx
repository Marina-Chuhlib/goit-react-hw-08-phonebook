import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Loader from 'shared/components/Loader/Loader';

import NavBar from  "./modules/NavBar/NavBar"

import css from './App.module.css';

const Layout = lazy(() => import('./modules/Layout/Layout'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));


const App = () => {
  return ( 
   <div className={css.wrapper}>
     <BrowserRouter basename="/goit-react-hw-08-phonebook">
       <NavBar/>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
 </div>
 
  );
};

export default App;
