import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Loader from 'shared/components/Loader/Loader';
import { Navigation } from 'components/Navigation/Navigation';
import { Layout } from './components/Layout/Layout';

import css from './App.module.css';

// const Navigation = lazy(() => import('components/Navigation/Navigation'));
// const Layout = lazy(() => import('./components/Layout/Layout'));
// const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
// const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));


import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';




const App = () => {
  return ( 
  //  <div className={css.wrapper}>
     <BrowserRouter basename="/goit-react-hw-08-phonebook">
       <Navigation/>
        {/* <Suspense fallback={<Loader/>}> */}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>
          </Routes>
        {/* </Suspense> */}
      </BrowserRouter>
// </div>
 
  );
};

export default App;
