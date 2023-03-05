import { Navigation } from 'components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      {/* <header>
        <Navigation />
      </header> */}
      <main>
        <Outlet />
      </main>
    </>
  );
};