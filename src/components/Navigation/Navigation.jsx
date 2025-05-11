import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './Navigation.module.css';

const setActiveClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink className={setActiveClass} to='/'>
        Home
      </NavLink>
      <NavLink className={setActiveClass} to='/contacts'>
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
