import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';
const setActiveClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.wrapper}>
      {isLoggedIn && <h2 className={s.text}>{user.name}</h2>}
      <nav className={s.nav}>
        <NavLink className={setActiveClass} to='/'>
          Home
        </NavLink>
        <NavLink className={setActiveClass} to='/contacts'>
          Contacts
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink className={setActiveClass} to='/login'>
              Login
            </NavLink>
            <NavLink className={setActiveClass} to='/register'>
              Register
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <button
            onClick={() => {
              dispatch(logoutThunk());
            }}
            className={s.btn}
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
