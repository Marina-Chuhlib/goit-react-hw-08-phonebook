import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { isUserLogin } from 'redux/auth/auth-selectors';
import { login } from 'redux/auth/auth-operations';

import LoginForm from 'modules/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();

  // const isLogin = useSelector(isUserLogin);

  const handleLogin = data => {
    dispatch(login(data));
  };

  // if (isLogin) {
  //   return <Navigate to="/contacts" />;
  // }

  return (
    <>
      <LoginForm onSubmit={handleLogin} />
    </>
  );
};

export default LoginPage;
