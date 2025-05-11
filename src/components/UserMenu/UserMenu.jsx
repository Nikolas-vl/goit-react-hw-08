import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={s.wrapper}>
      <p className={s.text}>Welcome, {user.name}</p>
      <button className={s.btn} onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
