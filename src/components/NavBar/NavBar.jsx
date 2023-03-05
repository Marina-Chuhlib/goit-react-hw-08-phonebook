import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="register">Register</NavLink>
          </li>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
          <li>
            <NavLink to="contacts">Phone Book</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};