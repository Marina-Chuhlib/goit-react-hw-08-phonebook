// import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Loader from 'shared/components/Loader/Loader';
import { Layout } from './components/Layout/Layout';

import css from './App.module.css';

// const NavBar = lazy(() => import('components/NavBar/NavBar'));
// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
// const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
// const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

import { NavBar } from 'components/NavBar/NavBar';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';




const App = () => {
  return ( 
   <div className={css.wrapper}>
     <BrowserRouter basename="/goit-react-hw-08-phonebook">
       <NavBar/>
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
</div>
 
  );
};

export default App;
