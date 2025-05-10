import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';

const setActiveClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <header>
      <nav className={s.nav}>
        <NavLink className={setActiveClass} to='/'>
          Home
        </NavLink>
        <NavLink className={setActiveClass} to='/contacts'>
          Contacts
        </NavLink>
        <NavLink className={setActiveClass} to='/login'>
          Login
        </NavLink>
        <NavLink className={setActiveClass} to='/register'>
          Register
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
