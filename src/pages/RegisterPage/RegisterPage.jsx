import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { signup } from 'redux/auth/auth-operations';

import RegisterForm from 'modules/RegisterForm/RegisterForm';
import { isUserLogin } from 'redux/auth/auth-selectors';

const RegisterPage = () => {
  const dispatch = useDispatch();

  //  const isLogin = useSelector(isUserLogin)

  const handleSignup = data => {
    dispatch(signup(data));
  };

//   if (isLogin) {
//  return <Navigate to="/contacts"/>
//   }

  return (
    <>
      <RegisterForm onSubmit={handleSignup} />
    </>
  );
};

export default RegisterPage;
