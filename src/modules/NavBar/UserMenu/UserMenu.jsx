import { useSelector, useDispatch } from 'react-redux';

import { getUser } from 'redux/auth/auth-selectors';

import { logout } from 'redux/auth/auth-operations';

import css from './UserMenu.module.css';

const UserMenu = () => {
  const { email, name } = useSelector(getUser);
  console.log(email, '=> User Menu email');

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.name}>{name}</p>
      <p>{email}</p>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
