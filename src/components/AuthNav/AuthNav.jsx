import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './AuthNav.module.css';

const setActiveClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const AuthNav = () => {
  return (
    <div className={s.wrapper}>
      <NavLink className={setActiveClass} to='/login'>
        Login
      </NavLink>
      <NavLink className={setActiveClass} to='/register'>
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
