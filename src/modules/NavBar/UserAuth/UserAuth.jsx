import { NavLink } from "react-router-dom";

const UserAuth = () => {
  return (
    <>
         <NavLink to="register">Register</NavLink> / 
          <NavLink to="login">Login</NavLink> 
          
    </>
  );
};

export default UserAuth
