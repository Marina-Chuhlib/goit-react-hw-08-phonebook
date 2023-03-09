import { useSelector,useDispatch} from 'react-redux';

import { getUser } from 'redux/auth/auth-selectors';

import { logout } from 'redux/auth/auth-operations';


import css from './UserMenu.module.css';

const UserMenu = () => {
  const {email} = useSelector(getUser);
  console.log(email, "UserMenu")

  const dispatch = useDispatch()
  
  const onLogout = () => {
    dispatch(logout())
  }

  return (
    <div className={css.wrapper}>
      {/* <p>{name}</p> */}
      <p>{email}</p>
      <p>Hello</p>
      <button type="button" onClick={onLogout}>Logout</button>
    </div>
  );
};
export default UserMenu;
