import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from 'redux/auth/auth-selectors';

import css from './HomePage.module.css';

const HomePage = () => {
  const { isLogin, token } = useSelector(getAuth);

  useEffect(() => {
    document.body.className = 'homePage';
    return () => {
      document.body.className = '';
    };
  }, []);

  return (
    <div className={css.container}>
      {isLogin && token && <h2 className={css.title}>Digital Phone List</h2>}

      {!isLogin && !token && (
        <>
          <h2 className={css.title}>Digital Phone List</h2>
          <Link to="/login" className={css.link}> I already have an account </Link>
        </>
      )}
    </div>
  );
};

export default HomePage;
