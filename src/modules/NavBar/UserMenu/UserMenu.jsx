import { useSelector, useDispatch } from 'react-redux';

import { getUser } from 'redux/auth/auth-selectors';
import css from './UserMenu.module.css';
import { logout } from 'redux/auth/auth-operations';
import { Btn } from 'shared/components/Button/Buttons';
import LogoutIcon from '@mui/icons-material/Logout';;


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
      <button type="button" onClick={onLogout} className={css.button} >
        Logout
      </button>
      {/* <Btn type="button" onClick={onLogout} endIcon={<LogoutIcon />}>Logout</Btn> */}
    </div>
  );
};
export default UserMenu;
