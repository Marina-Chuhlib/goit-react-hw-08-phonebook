import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isUserLogin } from 'redux/auth/auth-selectors';

const PrivateRoute = () => {
  const isLogin = useSelector(isUserLogin);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;

// <Typography
//   component="a"
//   href="/goit-react-hw-08-phonebook/contacts"
//   sx={{
//     m: 'auto',
//     // display: { md: 'flex' },
//     fontFamily: 'roboto',
//     fontWeight: 700,
//     letterSpacing: '.1rem',
//     color: 'inherit',
//     textDecoration: 'none',
//   }}
// >
//   Contacts
// </Typography>
